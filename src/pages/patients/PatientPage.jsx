import React, {useState, useEffect} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonLabel, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonSegment, IonSegmentButton, IonIcon, IonText, IonSearchbar } from '@ionic/react';
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './patients.css';

// Import the icons for the services
import { medkitOutline, fitnessOutline, nutritionOutline } from 'ionicons/icons';

const PatientsPage = () => {
  const [authUser, setAuthUser] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState('services');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  // Define the services
  const services = [
    { name: 'Medical Checkup', icon: medkitOutline },
    { name: 'Fitness Training', icon: fitnessOutline },
    { name: 'Nutrition Advice', icon: nutritionOutline },
  ];

  // fetch doctors data
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://192.168.100.3:3000/api/doctors");
        setDoctors(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setAuthUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    setFilteredDoctors(doctors.filter(doctor => doctor.name.toLowerCase().includes(searchTerm.toLowerCase())));
    setFilteredServices(services.filter(service => service.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm, doctors, services]);

  const openBookingModal = (doctor) => {
    setSelectedDoctor(doctor);
    setShowBookingModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='heading'>Welcome {authUser?.fullName} to Our Appointment System</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonSearchbar className="orange-searchbar" value={searchTerm} onIonChange={e => setSearchTerm(e.target.value)}></IonSearchbar>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Upcoming Appointments</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {/* Upcoming appointments data will be rendered here */}
          </IonCardContent>
        </IonCard>

        {/* services section */}
        <IonSegment onIonChange={e => setSelectedSegment(e.detail.value)}>
          <IonSegmentButton value="services">
            <IonLabel>Services</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="doctors">
            <IonLabel>Doctors</IonLabel>
          </IonSegmentButton>
        </IonSegment>

        {selectedSegment === 'services' ? (
          <IonCard>
            <IonCardHeader>
              <IonTitle>Our Services</IonTitle>
            </IonCardHeader>
           
            <IonCardContent>
            <Swiper
        spaceBetween={10}
        slidesPerView={'auto'}
        freeMode={true}
      >
        {filteredServices.map((service, index) => (
          <SwiperSlide key={index}>
            <IonCard className="service-card">
              <IonIcon icon={service.icon} />
              <IonCardHeader>
                <p>{service.name}</p>
              </IonCardHeader>
            </IonCard>
          </SwiperSlide>
        ))}
      </Swiper>
            </IonCardContent>
          </IonCard>
        ) : (
          <IonCard>
            <IonCardHeader>
              <IonTitle>Our doctors are ready for you</IonTitle>
            </IonCardHeader>
            <IonCardContent>
  <Swiper
    spaceBetween={5}
    slidesPerView={'auto'}
    freeMode={true}
  >
    {filteredDoctors.length > 0 ? (
      filteredDoctors.map((doctor, index) => (
        <SwiperSlide key={index}>
          <div class="card">
          <div class="image_container">
          <Link to={`/doctor/${doctor.id}`}>
            <IonImg className="doctor-image" src={doctor.image} alt={doctor.name} class="image"/>
          </Link>
        </div>
        <div class="title">
         <IonText class='title'>{doctor.specialties}</IonText>
          <span>{doctor.name}</span>
        </div>
        <div class="action">
        
          <button class="cart-button">
           
            <span>Book</span>
          </button>
        </div>
       
      
      </div>
        
        </SwiperSlide>
      ))
    ) : (
      // Skeleton loader
      [...Array(5)].map((_, index) => (
        <SwiperSlide key={index}>
          <div class="card">
            <div class="image_container">
              <div class="skeleton skeleton-image"></div>
            </div>
            <div class="title">
              <div class="skeleton skeleton-title"></div>
            </div>
            <div class="action">
              <div class="price">
                <div class="skeleton skeleton-specialties"></div>
              </div>
              <button class="cart-button skeleton skeleton-button">
                <span></span>
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))
    )}
  </Swiper>
</IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default PatientsPage;
import React from "react";
import { IonButton, IonIcon, IonText, IonSelect, IonSelectOption } from "@ionic/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@ionic/react/css/core.css";
import "./Landing.css";
import { languageOutline } from "ionicons/icons";
import { useHistory } from 'react-router-dom';

const Hero = () => {
  const history = useHistory();
  const [showButtons, setShowButtons] = React.useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: "linear",
    afterChange: () => {
      if (!showButtons) setShowButtons(true);
    }
  };

  const handleLoginClick = () => {
    history.push('/login');
  };

  const handleSignupClick = () => {
    history.push('/signup');
  };

  const slidesData = [
    {
      title: "Bridging Health",
      subtitle: "Connect, Learn, Communicate",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1715665859/snnzskf6dfltgo8aptze.jpg"
    },
    {
      title: "Schedule and Manage Appointments",
      subtitle: "We Provide the best tools for you to manage your appointments and schedules",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1717643334/woman-2141808_1280_uwt6zj.jpg"
    },
    {
      title: "Get the best Health Care",
      subtitle: "We provide the best health care services",
      image: "https://res.cloudinary.com/dws2bgxg4/image/upload/v1717643334/woman-2141808_1280_uwt6zj.jpg"
    },
  ];

  return (
    <div className="hero_wrapper">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="hero_container">
            <img src="https://res.cloudinary.com/dws2bgxg4/image/upload/e_background_removal/c_pad,w_45,h_46,f_png/v1717428114/logomed_gj1nuw.avif" alt="Logo" className="logo" />
            <div className="language_container">
              <IonIcon className="text-orange-500" icon={languageOutline} />
              <IonSelect placeholder="Select Language" interface="popover">
                <IonSelectOption value="en">English</IonSelectOption>
                <IonSelectOption value="es">Spanish</IonSelectOption>
              </IonSelect>
            </div>
            <img src={slide.image} alt={slide.title} className="background_image" />
            <div className="overlay_content">
              <div className="text_container">
                <IonText>
                  <h2 className="hero_text">{slide.title}</h2>
                </IonText>
              </div>
              <div className="subtitle">
                <IonText>
                  <p className="hero_subtitle"><strong>{slide.subtitle}</strong></p>
                </IonText>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {showButtons && (
        <div className="button_container">
          <IonButton shape="round" size="large" expand="block" color="primary" onClick={handleLoginClick}>
            Login
          </IonButton>
          <IonButton shape="round" size="large" expand="block" color="secondary" onClick={handleSignupClick}>
            Signup
          </IonButton>
        </div>
      )}
    </div>
  );
};

export default Hero

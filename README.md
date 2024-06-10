## signup

## Login


## verification

## Account types

## Frontend navigation

# Patient

# Create appointment
# View appointments


.skeleton {
  background-color: #ddd;
  border-radius: 4px;
}

.skeleton-image {
  width: 100%;
  height: 150px;
}

.skeleton-title,
.skeleton-specialties {
  width: 70%;
  height: 20px;
  margin: 10px 0;
}

.skeleton-button {
  width: 80px;
  height: 40px;
}
#
 <div class="image_container">
          <Link to={`/doctor/${doctor.id}`}>
            <IonImg className="doctor-image" src={doctor.image} alt={doctor.name} class="image"/>
          </Link>
        </div>
        <div class="title">
          <span>{doctor.name}</span>
        </div>
        <div class="action">
          <div class="price">
            <span>{doctor.specialties}</span>
          </div>
          <button class="cart-button">
           
            <span>Book</span>
          </button>
        </div>
       
      
      </div>
import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import { personOutline } from 'ionicons/icons';
import { useStoreState } from 'pullstate';

import './Tab1.css';



const PatientTab1 = () => {



  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Rooms</IonTitle>

          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={ personOutline } />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid className="ion-padding-start ion-padding-end extra-padding ion-padding-bottom ion-margin-bottom">
          <IonRow>
            <IonCol size="12">
              <IonText color="dark">
                <p className="title">Upcoming</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
           
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonText color="dark">
                <p className="title">Happening Now</p>
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PatientTab1;

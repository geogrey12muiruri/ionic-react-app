import React from 'react'

import { IonReactRouter } from '@ionic/react-router'
import PatientTabs from './PatientsTabs'

const Patientdash = () => {
  return (
    <div>
      <IonReactRouter>
    <PatientTabs />
  </IonReactRouter>
      
    </div>
  )
}

export default Patientdash

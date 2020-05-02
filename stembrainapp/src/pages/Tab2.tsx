import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonCardHeader, IonButton, IonIcon } from '@ionic/react';
import './Tab2.css';
import AddMainPage from '../AddMainPage'

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <AddMainPage/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

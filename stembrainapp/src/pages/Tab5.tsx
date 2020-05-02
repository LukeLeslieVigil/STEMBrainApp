import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonToolbar, } from '@ionic/react';
import './Tab5.css';
import AddQuestion from '../AddQuestion';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <AddQuestion />
      </IonContent>
    </IonPage>
  );
};

export default Tab5;

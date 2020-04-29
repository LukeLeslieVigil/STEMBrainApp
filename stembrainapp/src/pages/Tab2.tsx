import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonCardHeader, IonButton, IonIcon } from '@ionic/react';
import './Tab2.css';
import { star, exit, flask } from 'ionicons/icons';
import AddMainPage from '../AddMainPage'
import AddCategories from '../AddCategories';
import AddDifficulty from '../AddDifficulty';
import AddQuestion from '../AddQuestion';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <AddMainPage></AddMainPage>
        <AddCategories></AddCategories>
        <AddDifficulty></AddDifficulty>
        <AddQuestion></AddQuestion>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

import React from 'react';
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import {cog, power, beaker, returnDownBack, calculator} from 'ionicons/icons';
import './Tab3.css';
import AddCategories from '../AddCategories';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <AddCategories />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;

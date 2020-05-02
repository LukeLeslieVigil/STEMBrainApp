import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import {returnDownBack} from 'ionicons/icons';
import './Tab4.css';
import AddDifficulty from '../AddDifficulty';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <AddDifficulty />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;

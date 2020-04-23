import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonCardHeader, IonButton, IonIcon } from '@ionic/react';
import './Tab2.css';
import { star, exit, flask } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <h1>Welcome to the STEM Brain App!</h1>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <h1>Select an option:</h1>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" size="large" href="tab3">
              <IonIcon slot="start" icon={star} />
              Start Learning
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="success" size="large" href="Tab2">
              <IonIcon slot="start" icon={flask} />
              Learning Progress
              </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="danger" size="large" href="#">
              <IonIcon slot="start" icon={exit} />
              Exit
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

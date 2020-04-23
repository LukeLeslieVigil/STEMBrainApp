import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import {returnDownBack} from 'ionicons/icons';
import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <h1>Insert Category Name Here</h1>
        </IonHeader>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" size="large" href="Tab5">
              Beginner
            </IonButton>
            <h2>Completed: 0/5</h2>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="success" size="large" href="Tab5">
              Intermediate
              </IonButton>
              <h2>Completed: 0/5</h2>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="warning" size="large" href="Tab5">
              Advanced
            </IonButton>
            <h2>Completed: 0/5</h2>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="danger" size="large" href="Tab3">
              <IonIcon slot="start" icon={returnDownBack} />
              Back to Category Selection
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;

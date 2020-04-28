import React from 'react';
import firebase from 'firebase';
import { IonContent,IonText, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonButton, IonIcon } from '@ionic/react';
import './Tab2.css';
import { star, exit, flask } from 'ionicons/icons';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore';
import Questions from '../Questions';
import Item from '../item';

export const questionType = "science";
const questionDifficulty = "Basic";
const Tab2: React.FC = () => {

  const showQuestions = () =>
  {
    return <Questions/>;
  }
  
  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
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
            <IonButton expand="block" shape="round" size="large" href="tab1">
              <IonIcon slot="start" icon={star} />
              Start Learning
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="success" size="large" onClick={() => showQuestions}>
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

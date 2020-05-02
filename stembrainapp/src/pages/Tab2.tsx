import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonCardHeader, IonButton, IonIcon } from '@ionic/react';
import './Tab2.css';
/*
import { star, exit, flask } from 'ionicons/icons';
import Questions from '../Questions';
import Answers from '../Answers';

export const questionType = "science";
export const questionDifficulty = "Basic";*/

import AddMainPage from '../AddMainPage'


const Tab2: React.FC = () => {

  const showQuestions = () =>
  {
    /* this didn't end up working for showing the components from Questions */
    return <Questions/>
  }

  
  return (
    <IonPage>
      <IonContent>
        {/*
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
            <IonButton expand="block" shape="round" color="success" size="large" /* href="Questions"*/ /*href with the questions didn't render the button properly either*/>
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

      {/*  
      Delete the comment here to see our progress
      Ran into some issues trying to pull data from the database
      Since it is a new language and format to learn with the database we had some troubles.

      below is the JSX component that displays the button

      <Answers/>
      
      */}
*/}
        <AddMainPage/>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

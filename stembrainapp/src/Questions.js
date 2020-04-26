import React, {useState, useEffect} from 'react';
import firebase from 'firebase';
import {IonPage, IonContent, IonCard, IonCardContent, IonText} from '@ionic/react';
import {useCollection} from 'react-firebase-hooks/firestore';
import Answers from './Answers';

function Questions(questionType, questionDifficulty, {doc})
{
    var i = 1;
    const [value, loading, error] = useCollection
    (      
        firebase.firestore().collection(questionType + "Questions").doc(questionType + questionDifficulty + i),
       
    );

    
    return(
        <IonPage>   
            <IonContent>
                <IonCard>
                <IonCardContent>
                    <IonText value = {() => {doc.data("question");} }/>
                </IonCardContent>
                </IonCard>
            </IonContent>

            <Answers/>
        </IonPage>
    );

}

export default Questions;
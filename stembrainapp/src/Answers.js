import React from 'react';
import firebase from 'firebase';
import {IonContent, IonCard, IonCardContent, IonButton} from '@ionic/react';
import {useCollection} from 'react-firebase-hooks/firestore';


function Answers(questionType, questionDifficulty, {doc})
{
    var i = 1;
    const [value, loading, error] = useCollection
    (      
        firebase.firestore().collection(questionType + "Answers").doc(questionType + questionDifficulty + i)   
    );

    return(
         
            <IonContent>
                <IonCard>
                <IonCardContent>
                    <IonButton value = {() => {doc.data("Answer1");} }/>
                    <IonButton value = {() => {doc.data("Answer2");} }/>
                    <IonButton value = {() => {doc.data("Answer3");} }/>
                    <IonButton value = {() => {doc.data("Answer4");} }/>
                </IonCardContent>
                </IonCard>
            </IonContent>
        

    );

}

export default Answers;
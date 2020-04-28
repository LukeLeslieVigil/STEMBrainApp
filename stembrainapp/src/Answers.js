import React from 'react';
import firebase from 'firebase';
import {IonContent, IonCard, IonCardContent, IonButton} from '@ionic/react';
import {useCollection} from 'react-firebase-hooks/firestore';


function Answers(questionType, questionDifficulty)
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
                    <IonButton value = {() => {value.field("Answer1");} }/>
                    <IonButton value = {() => {value.field("Answer2");} }/>
                    <IonButton value = {() => {value.field("Answer3");} }/>
                    <IonButton value = {() => {value.field("Answer4");} }/>
                </IonCardContent>
                </IonCard>
            </IonContent>
        

    );

}

export default Answers;
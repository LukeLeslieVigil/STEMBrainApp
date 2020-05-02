import React from 'react';
import firebase from 'firebase';
import {IonCard, IonCardContent, IonButton, IonText, IonItem, IonList} from '@ionic/react';
import {useDocument, useCollection} from 'react-firebase-hooks/firestore';
import Item from './item';

export default function Answers()
{
    //const questionType = "science"
   // const questionDifficulty = "Basic"
    //var i = 1;

  
        const [value, loading, error] = useDocument
        (      
            firebase.firestore().collection("scienceAnswers").orderBy("Answer1","desc"),
            {
                snapshotListenOptions:{includeMetadataChanges: true}
            }
            
        );

        let ref = firebase.firestore().collection("scienceAnswers").doc("scienceBasic1").get();
    
    

    return(
        <>
        <IonList id="list">
                <IonCard>
                    <IonCardContent>
                        <IonButton  expand="block" shape="round" color="danger" size="large">
                       
                            
                            {value && value.docs.map(doc => 
                            {
                                return(
                                    !loading && (<Item doc ={doc}
                                       
                                        key = {doc.id}
                                        />
                                        )
                                );
                            })}
                            
                                   
                                    
                        </IonButton>
                    </IonCardContent>
              {/*          <IonButton>
                            <IonText value = {() => { !loading && value.field("Answer3");} }/>
                        </IonButton>
                        <IonButton>
                            <IonText value = {() => { !loading && value.field("Answer4");} }/>
                        </IonButton>
              */}
              </IonCard>
              </IonList>
           
        </>
    );

}

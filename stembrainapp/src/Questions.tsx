import React from 'react';

import './Questions.css'
import {IonPage, IonContent, IonCard, IonCardContent} from '@ionic/react';

import Answers from './Answers';

//(questionType, questionDifficulty)

const Questions: React.FC = () => {

  
  
  /*let collectionRef = firebase.firestore().collection('col');
  let documentRef = collectionRef.doc('doc');
  
  return documentRef.set({x:10, y:5}).then(() => {
    return collectionRef.where('x', '>', 5).select('y').get();
  }).then((res) => {
    console.log(`y is ${res.docs[0].get('y')}.`);
  });
*/

 // const ref = firebase.firestore().collection("scienceQuestions").doc("scienceBasic1");


        
       
 /*const docRef = collRef.get()
        .then(doc => {
          if (!doc.exists) {
            console.log('No such document!');
          } else {
            console.log('Document data:', doc.data());
          }
        })
        .catch(err => {
          console.log('Error getting document', err);
        });

*/

  /*const getDoc = ref.get()
          .then(doc=> {
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
            }
          })
          .catch(err => {
            console.log('Error getting document', err);
          }); 

  */
  

 /*const value = useCollection
  (
    firebase.firestore().collection("scienceQuestions"),
    {
      snapshotListenOptions: {includeMetadataChanges:true}
    }
  );*/

 // var query = ref.where("type", "==", "scienceBasic1");
 /*
    const debug = (bal:any) =>
    {
        console.log(bal);
    }
    */
  
    return(
      <IonPage>   
      <IonContent>
          <IonCard>
          <IonCardContent>
              <Answers/>
          </IonCardContent>
          </IonCard>
      </IonContent>

      
  </IonPage> 
    );


    /*
    {value.docs.map(doc =>{  
                        return(
                            
                          !loading && (<Item doc ={doc} key = {doc.id}  /> )
                           
                        );
                       })}
                       */
}

export default Questions;
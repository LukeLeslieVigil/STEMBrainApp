import React, { useEffect } from 'react';
import firebase from 'firebase';
import {IonPage, IonContent, IonCard, IonCardContent, IonText} from '@ionic/react';
import {useCollection} from 'react-firebase-hooks/firestore';
import Answers from './Answers';
import Tab2 from './pages/Tab2';
import questionType from './pages/Tab2';
import Item from './item';

//(questionType, questionDifficulty)

const Questions: React.FC = () => {
    const [value, loading, error] = useCollection
  (
    firebase.firestore().collection(questionType + "Questions").orderBy("desc"),
    {
      snapshotListenOptions: {includeMetadataChanges:true}
    }
  );

    const debug = (bal:any) =>
    {
        console.log(bal);
    }
  
    return(
        <IonPage>   
            <IonContent>
                <IonCard>
                <IonCardContent>
                    <IonText >
                    {debug(value?.docs)}
                      {value?.docs.map(doc =>{  
                        return(
                            
                          !loading && (<Item doc ={doc} key = {doc.id}  /> )
                           
                        );
                       })}
                       
                        
                        
                            
                        
                    </IonText>
                </IonCardContent>
                </IonCard>
            </IonContent>

            
        </IonPage>
    );
    

  
}

export default Questions;
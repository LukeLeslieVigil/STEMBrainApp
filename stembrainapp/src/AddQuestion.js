import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent, IonButton, IonGrid, IonRow, IonCol, IonBackButton, IonButtons, IonToolbar, } from '@ionic/react';

function AddQuestion() {
    return(
        <div>
        <IonHeader>
          <IonToolbar>
            <h1>Category Name</h1>
            <IonButtons slot="start">
            <IonBackButton text="buttonText" icon="buttonIcon" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <h2>This is where the question will be</h2>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonButton expand="block" size="large" href="#">
                    Answer 1
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="block" size="large" href="#">
                    Answer 2
                  </IonButton>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonButton expand="block" size="large" href="#">
                    Answer 3
                  </IonButton>
                </IonCol>
                <IonCol>
                  <IonButton expand="block" size="large" href="#">
                    Answer 4
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
        <br />
        <IonButton size="small" shape="round" href="Tab4">
          Back to menu
        </IonButton>
        </div>
    )
}

export default AddQuestion;
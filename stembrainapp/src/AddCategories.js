import React from 'react';
import { IonCard, IonCardHeader, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import {cog, power, beaker, returnDownBack, calculator} from 'ionicons/icons';

export default function AddCategories() {
    return (
        <div>
            <IonCard>
          <IonCardHeader>
            <h1>Choose a category.</h1>
          </IonCardHeader>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" size="large" href="Tab4">
              <IonIcon slot="start" icon={beaker} />
              Science
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="success" size="large" href="Tab4">
              <IonIcon slot="start" icon={power} />
              Technology
              </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="warning" size="large" href="Tab4">
              <IonIcon slot="start" icon={cog} />
              Engineering
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="secondary" size="large" href="Tab4">
              <IonIcon slot="start" icon={calculator} />
              Mathematics
            </IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardContent>
            <IonButton expand="block" shape="round" color="danger" size="large" href="Tab2">
              <IonIcon slot="start" icon={returnDownBack} />
              Back to Menu
            </IonButton>
          </IonCardContent>
        </IonCard>
        </div>
    )
}
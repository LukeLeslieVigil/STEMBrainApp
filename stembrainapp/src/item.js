import React from 'react';
import {IonItem, IonLabel, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonIcon} from '@ionic/react';
import {document, trash} from 'ionicons/icons';

export default function Item({doc})
{
    let data = doc.data();

    return(
        <IonItemSliding>
            <IonItem>
                <IonLabel class = "ion-text-wrap"> 
                    <IonText className = "item-title">
                        <div>{data.question}
                        
                        </div>
                    </IonText>
                    <IonText className = "item-sub-title">
                        <div>
                            {new Date(data.type) + ""}
                        </div>

                    </IonText>
                    <IonText className = "item-id">
                        {doc.id}
                    </IonText>
                </IonLabel>
                <div></div>
            </IonItem>
            <IonItemOptions>

                <IonItemOption>
                    <IonIcon slot ="icon-only" icon={document}>
                    </IonIcon>
                </IonItemOption>

                <IonItemOption>
                    <IonIcon slot ="icon-only" icon={trash}>
                    </IonIcon>
                </IonItemOption>

            </IonItemOptions>
        </IonItemSliding>
    );
}
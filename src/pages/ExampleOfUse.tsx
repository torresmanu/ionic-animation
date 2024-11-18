import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';
import { useState } from 'react';
import AnimatedSVG from '../components/AnimatedSVG';

const ExampleOfUse: React.FC = () => {
  const [percentageShape1, setPercentageShape1] = useState<number>(0); // Fill percentage for Shape 1
  const [percentageShape2, setPercentageShape2] = useState<number>(0); // Fill percentage for Shape 2
  const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false); // Trigger for both animations

  // Map input values (0-300) to percentage (0-100)
  const mapToPercentage = (value: number) => Math.min(Math.max((value / 300) * 100, 0), 100);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Fill Animation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80%',
            gap: '30px', // Space between the shapes
            marginTop: '30px',
          }}
        >
          {/* Animated SVG Actividad */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatedSVG 
              percentage={triggerAnimation ? mapToPercentage(percentageShape1) : 0}
              fillColor="#BDE187" 
              duration={2000} 
              shape="shape1" 
              />
            <IonItem style={{ marginTop: '10px'}}>
              <IonLabel position="stacked">Fill Actividad</IonLabel>
              <IonInput
                type="number"
                value={percentageShape1}
                placeholder="0-300"
                onIonChange={(e) => {
                  const value = parseFloat(e.detail.value || '0');
                  setPercentageShape1(Math.min(Math.max(value, 0), 300)); // Clamp between 0 and 100
                }}
              />
            </IonItem>
          </div>

          {/* Animated SVG Nutricion */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <AnimatedSVG 
              percentage={triggerAnimation ? mapToPercentage(percentageShape2) : 0}
              fillColor="#BDE187" 
              duration={2000} 
              shape="shape2" 
            />
            <IonItem style={{ marginTop: '10px' }}>
              <IonLabel position="stacked">Fill Nutricion</IonLabel>
              <IonInput
                type="number"
                value={percentageShape2}
                placeholder="0-300"
                onIonChange={(e) => {
                  const value = parseFloat(e.detail.value || '0');
                  setPercentageShape2(Math.min(Math.max(value, 0), 300)); // Clamp between 0 and 100
                }}
              />
            </IonItem>
          </div>
        </div>

        {/* Button to trigger both animations */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <IonButton
            color="light"
            onClick={() => setTriggerAnimation((prev) => !prev)} // Trigger both animations
          >
            Animate Both Shapes
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ExampleOfUse;
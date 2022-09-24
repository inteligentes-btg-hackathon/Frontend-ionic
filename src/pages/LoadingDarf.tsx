import { IonContent, IonGrid } from "@ionic/react";

import Lottie from "lottie-react";
import loadingAnimation from "../assets/animations/loading-animation.json";

import "../styles/LoadingDarf.css";

const LoadingDarf: React.FC = () => {
  return (
    <IonContent fullscreen>
      <IonGrid>
        <div className="content-block">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{ height: 90 }}
          />
        </div>
      </IonGrid>
    </IonContent>
  );
};

export default LoadingDarf;

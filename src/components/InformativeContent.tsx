import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonRow,
} from "@ionic/react";
import { ReactElement } from "react";
import "../styles/components/InformativeContent.css";

interface InformativeContentProps {
  mainTitle: string;
  titleDescription: string;
  titleSubDescription: string;
  buttonText: string;
  hasBorderBottom?: boolean;
  buttonClickHandler: () => void;
}

const InformativeContent: React.FC<InformativeContentProps> = ({
  mainTitle,
  titleDescription,
  titleSubDescription,
  buttonText,
  buttonClickHandler,
  hasBorderBottom,
}) => {
  let borderBottomClass = "informative-content-border";
  if (!hasBorderBottom) {
    borderBottomClass = "";
  }
  return (
    <div className="content-block">
      <IonCol size="11">
        <div className={`informative-content-block ${borderBottomClass}`}>
          <div className="informative-block-top">
            <h6>{titleDescription}</h6>
            <h3>{mainTitle}</h3>
          </div>
          <h6 className="informative-insight-info">{titleSubDescription}</h6>
          <IonButton
            className="follow-taxes-button"
            onClick={buttonClickHandler}
          >
            {buttonText}
          </IonButton>
        </div>
      </IonCol>
    </div>
  );
};

export default InformativeContent;

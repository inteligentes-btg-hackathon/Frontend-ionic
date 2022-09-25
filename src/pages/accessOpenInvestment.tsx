import { IonButton, IonPage } from "@ionic/react";
import InformativeFooter from "../components/InformativeFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import InformativeContent from "../components/InformativeContent";
import NavHeaderDefault from "../components/headers/NavHeaderDefault";

const InfoIcon: React.FC = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleExclamation}
      style={{ color: "#FA6450", fontSize: "1.4em" }}
    />
  );
};

const NextPageIcon: React.FC = () => {
  return (
    <FontAwesomeIcon
      icon={faArrowRight}
      style={{ color: "#4C535D", fontSize: "1.4em" }}
    />
  );
};

const AccessOpenInvestment: React.FC = () => {
  return (
    <IonPage>
      <NavHeaderDefault showLeftArrow/>
      <InformativeContent
        mainTitle={"Tenha tudo em um só lugar."}
        titleDescription={"Open Investment"}
        titleSubDescription={"Conecte seus dados financeiros"}
        buttonText={"Conectar"}
        buttonClickHandler={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <InformativeFooter
        footerTitle="Tributos Pendentes"
        footerText="Facilite a forma como você declara os seus impostos com o Open Investment."
        footerIcon={<InfoIcon />}
        footerActionElement={<NextPageIcon />}
      />
    </IonPage>
  );
};

export default AccessOpenInvestment;

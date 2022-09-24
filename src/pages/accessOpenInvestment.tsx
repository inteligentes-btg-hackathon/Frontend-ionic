import { IonButton } from "@ionic/react";
import InformativeFooter from "../components/InformativeFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

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
    <>
      <InformativeFooter
        footerTitle="Tributos Pendentes"
        footerText="Facilite a forma como você declara os seus impostos com o Open Investment."
        footerIcon={<InfoIcon />}
        footerActionElement={<NextPageIcon />}
      />
    </>
  );
};

export default AccessOpenInvestment;

import { IonContent, IonHeader, IonPage } from "@ionic/react";

import InformativeFooter from "../components/InformativeFooter";

import "../styles/Home.css";

import {
  faCircleExclamation,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListTabNavigator from "../components/ListTabNavigator";
import InformativeContent from "../components/InformativeContent";

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
      onClick={() => {
        alert(123);
      }}
    />
  );
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonHeader className="home-header">
          <img className="profile-img" src="assets/profileMockup.jpeg" />
        </IonHeader>
        <InformativeContent
          mainTitle={"R$ 23.453,00"}
          titleDescription={"Total de Impostos no mês"}
          titleSubDescription={"20%+ que no último mês"}
          buttonText={"Acompanhar"}
          buttonClickHandler={() => {
            alert("Acompanhar button");
          }}
          hasBorderBottom={true}
        />

        <div className="stock-profit-block">
          <h6>Lucros:</h6>
          <h6>R$ 23.000,00</h6>
        </div>

        <ListTabNavigator
          buttonList={[
            { text: "DARF", onClickHandler: () => {} },
            { text: "Operações", onClickHandler: () => {} },
            { text: "Open Finance", onClickHandler: () => {} },
          ]}
        />
        <InformativeFooter
          footerTitle="Tributos Pendentes"
          footerIcon={<InfoIcon />}
          footerText={
            "Facilite a forma como você declara os seus impostos com o Open Investment."
          }
          footerActionElement={<NextPageIcon />}
        ></InformativeFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;

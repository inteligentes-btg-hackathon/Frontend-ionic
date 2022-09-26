import { IonContent, IonHeader, IonPage } from "@ionic/react";
import { useContext, useState } from "react";

import { ApplicationContext } from "../contexts/ApplicationContext";

import InformativeFooter from "../components/InformativeFooter";

import "../styles/Home.css";

import {
  faCircleInfo,
  faInfo,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListTabNavigator from "../components/ListTabNavigator";
import InformativeContent from "../components/InformativeContent";
import { useHistory, Router } from "react-router";

const InfoIcon: React.FC = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleInfo}
      style={{ color: "#FA6450", fontSize: "1.4em" }}
    />
  );
};

const InsightIcon: React.FC = () => {
  return (
    <FontAwesomeIcon
      icon={faCircleInfo}
      style={{ color: "#41E396", fontSize: "1.4em" }}
    />
  );
};

const NextPageIcon: React.FC = (next: any) => {
  return (
    <FontAwesomeIcon
      icon={faArrowRight}
      style={{ color: "#4C535D", fontSize: "1.4em" }}
      onClick={next}
    />
  );
};

const Home: React.FC = () => {
  const {
    lastMonthProfitAmount,
    lastMonthTaxAmount,
    lastMonthPercentageInsight,
    hasPendingDarf,
  } = useContext(ApplicationContext);

  const PendingDarfInformativeElement = (next: any) => {
    return (
      <InformativeFooter
        footerTitle="Tributos Pendentes"
        footerIcon={<InfoIcon />}
        footerText={
          "Facilite a forma como você declara os seus impostos com o Open Investment."
        }
        footerActionElement={<NextPageIcon />}
      ></InformativeFooter>
    );
  };

  const history = useHistory();

  const DefaultInformativeElement = () => {
    return (
      <InformativeFooter
        footerTitle="Facilita BTG"
        footerIcon={<InsightIcon />}
        footerText={
          "Para ter acesso completo ao Facilita BTG é necessário conceder acesso ao Open Investment."
        }
        footerActionElement={<NextPageIcon />}
      ></InformativeFooter>
    );
  };

  return (
    <IonPage>
      <IonContent>
        <IonHeader className="home-header">
          <img className="profile-img" src="assets/profileMockup.jpeg" />
        </IonHeader>
        <InformativeContent
          mainTitle={`R$ ${lastMonthTaxAmount}`}
          titleDescription={"Total de Impostos no mês"}
          titleSubDescription={`+${lastMonthPercentageInsight}% que no último mês`}
          buttonText={"Acompanhar"}
          buttonClickHandler={() => {
            history.push("/stockTransactions");
          }}
          hasBorderBottom={true}
        />

        <div className="stock-profit-block">
          <h6>Lucros:</h6>
          <h6>
            <>R$ {lastMonthProfitAmount}</>
          </h6>
        </div>

        <ListTabNavigator
          buttonList={[
            {
              text: "DARF",
              onClickHandler: () => {
                history.push("/dashboardDarf");
              },
            },
            {
              text: "Operações",
              onClickHandler: () => {
                history.push("/stockTransactions");
              },
            },
            {
              text: "Open Finance",
              onClickHandler: () => {
                history.push("/openInvestment");
              },
            },
          ]}
        />
        {hasPendingDarf && <PendingDarfInformativeElement />}
      </IonContent>
    </IonPage>
  );
};

export default Home;

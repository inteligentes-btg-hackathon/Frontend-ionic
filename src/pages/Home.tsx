import MessageListItem from "../components/MessageListItem";
import { useState } from "react";
import { Message, getMessages } from "../data/messages";

import BTG_LOGO from "../assets/logoBtg.svg";

import {
  IonContent,
  IonHeader,
  IonPage,
  useIonViewWillEnter,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useIonViewWillEnter(() => {
    const msgs = getMessages();
    setMessages(msgs);
  });

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader class="header">
        <img height={50} className={"title-img"} src={BTG_LOGO} />
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol size="10">
              <div className="content-block">
                <h3>
                  Que bom te ver por
                  <br />
                  aqui, Henrique!
                </h3>
                <IonButton className="login-button">Entrar</IonButton>
                <h5>Entrar como uma nova conta {">"}</h5>
                <h5>Iniciar Cadastro {">"}</h5>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;

import { IonContent, IonHeader, IonPage } from "@ionic/react";

import {
  faClose,
  faFileInvoice,
  faClockRotateLeft,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CustomButton from "../components/buttons/customButton";
import "../styles/dashboardDarf.css";
import { useHistory } from "react-router";

const DashboardDarf: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader className="nav-header-dashboard">
        <h3>Controle DARF</h3>
        <FontAwesomeIcon
          icon={faClose}
          className="nav-icon"
          onClick={() => {
            history.replace("/home");
          }}
        />
      </IonHeader>

      <div className="container">
        <CustomButton
          text={"Simular DARF"}
          IconElement={faFileInvoice}
          onclickHandler={() => {
            history.push("/simulate");
          }}
        />
        <CustomButton
          text={"Histórico de Simulações"}
          IconElement={faClockRotateLeft}
          onclickHandler={() => {
            history.push("/historicalDarf");
          }}
        />
        <CustomButton
          text={"Realizar Pagamento"}
          IconElement={faFileInvoiceDollar}
          onclickHandler={() => {
            history.push("/pendingTaxes");
          }}
        />
      </div>
    </IonPage>
  );
};

export default DashboardDarf;

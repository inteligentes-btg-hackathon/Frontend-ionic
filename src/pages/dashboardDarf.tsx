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

const DashboardDarf: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="nav-header-dashboard">
        <h3>Controle DARF</h3>
        <FontAwesomeIcon icon={faClose} className="nav-icon" />
      </IonHeader>

      <div className="container">
        <CustomButton
          text={"Simular DARF"}
          IconElement={faFileInvoice}
          onclickHandler={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <CustomButton
          text={"Histórico de Simulações"}
          IconElement={faClockRotateLeft}
          onclickHandler={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
        <CustomButton
          text={"Realizar Pagamento"}
          IconElement={faFileInvoiceDollar}
          onclickHandler={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </div>
    </IonPage>
  );
};

export default DashboardDarf;

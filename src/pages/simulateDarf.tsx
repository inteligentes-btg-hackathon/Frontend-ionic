import { IonPage, IonDatetime, IonFooter } from "@ionic/react";
import {
  faCircleCheck,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import NavHeaderDefault from "../components/headers/NavHeaderDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/simulateDarf.css";
import { useHistory } from "react-router";
import { ApplicationContext } from "../contexts/ApplicationContext";
import { useContext } from "react";

const SimulateDarf: React.FC<{}> = ({}) => {
  const history = useHistory();
  const { generateDarf, simulatedDarfLink } = useContext(ApplicationContext);

  return (
    <>
      <IonPage>
        <NavHeaderDefault
          leftArrowClickHandler={() => {
            history.goBack();
          }}
          closeIconClickHandler={() => {
            history.push("/dashboardDarf");
          }}
          showLeftArrow
          showCloseButton
        />
        <div className="page-content-darf">
          <div className="BlockSubtitle">
            <h4>Selecione o período desejado:</h4>
          </div>
          <IonDatetime
            presentation="month-year"
            preferWheel={true}
            className={"simulate-darf-moment"}
          ></IonDatetime>
        </div>
        <IonFooter className="simulate-darf-footer">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className={"confirm-darf-icon "}
            onClick={async () => {
              await generateDarf("2023-02");
              console.log(simulatedDarfLink);
            }}
          />
        </IonFooter>
      </IonPage>
    </>
  );
};

export default SimulateDarf;

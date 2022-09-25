import { IonPage, IonDatetime, IonFooter } from "@ionic/react";
import {
  faCircleCheck,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import NavHeaderDefault from "../components/headers/NavHeaderDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/simulateDarf.css";

const SimulateDarf: React.FC<{}> = ({}) => {
  return (
    <>
      <IonPage>
        <NavHeaderDefault
          leftArrowClickHandler={() => {
            alert("left click");
          }}
          closeIconClickHandler={() => {
            alert("close-click");
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
          />
        </IonFooter>
      </IonPage>
    </>
  );
};

export default SimulateDarf;

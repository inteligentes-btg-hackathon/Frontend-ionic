import { IonPage, IonContent, IonFooter } from "@ionic/react";
import {
  faCircleCheck,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import NavHeaderDefault from "../components/headers/NavHeaderDefault";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/successDarf.css";

const SuccessDarf: React.FC<{}> = ({}) => {
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
            showCloseButton
          />
        <div className="page-content">
     
          <div className="Title">
            <h3>
              Relatório gerado com <br /> sucesso
            </h3>
          </div>
          <div className="IconCheck">
            <FontAwesomeIcon icon={faCircleCheck} className="blockIcon" />
          </div>
          <div className="BlockSubtitle">
            <h4>
              Uma cópia foi enviada para <br /> o seu email
            </h4>
          </div>
          
          <div className="downloadBlock">
            <h5>Baixar documento</h5>
            <div className="downloadBlockIcon">
              <FontAwesomeIcon icon={faFileArrowDown} />
            </div>
          </div>
        </div>
        {/* <IonFooter>
        <div className="downloadBlock">
            <h5>Baixar documento</h5>
            <div className="downloadBlockIcon">
              <FontAwesomeIcon icon={faFileArrowDown} />
            </div>
          </div>
        </IonFooter> */}
      </IonPage>
    </>
  );
};

export default SuccessDarf;

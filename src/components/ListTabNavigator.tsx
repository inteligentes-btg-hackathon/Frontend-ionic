import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonContent, IonHeader, IonItem } from "@ionic/react";
import "../styles/components/ListTabNavigator.css";

export interface ButtonElement {
  text: string;
  onClickHandler: () => void;
}

interface ListTabProps {
  buttonList: ButtonElement[];
}

const ListTabNavigator: React.FC<ListTabProps> = ({ buttonList }) => {
  let hNavClass = "horizontal-tab-nav-sm";
  if (buttonList.length > 3) {
    hNavClass = "horizontal-tab-nav-lg";
  }
  return (
    <div>
      <div className={hNavClass}>
        {buttonList.map((button) => {
          return (
            <div className="horizontal-btn" onClick={button.onClickHandler}>
              {button.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListTabNavigator;

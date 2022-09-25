import "../../styles/components/headers/NavHeaderDefault.css";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonHeader } from "@ionic/react";
import { useHistory } from "react-router";

interface NavHeaderDefaultProps {
  leftArrowClickHandler?: () => void;
  closeIconClickHandler?: () => void;
  showLeftArrow?: boolean;
  showCloseButton?: boolean;
}

const NavHeaderDefault: React.FC<NavHeaderDefaultProps> = ({
  leftArrowClickHandler,
  closeIconClickHandler,
  showLeftArrow,
  showCloseButton,
}) => {
  let headerDefaultClassname = "nav-header-start";
  if (showLeftArrow && showCloseButton) {
    headerDefaultClassname = "nav-header-multiple";
  } else if (showCloseButton) {
    headerDefaultClassname = "nav-header-end";
  }

  const history = useHistory();
  return (
    <IonHeader className={`nav-header ${headerDefaultClassname}`}>
      {showLeftArrow && (
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="nav-icon"
          onClick={() => {
            history.goBack();
          }}
        />
      )}
      {showCloseButton && (
        <FontAwesomeIcon
          icon={faClose}
          className="nav-icon"
          onClick={closeIconClickHandler}
        />
      )}
    </IonHeader>
  );
};

export default NavHeaderDefault;

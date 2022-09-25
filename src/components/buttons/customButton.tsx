import { IonButton } from "@ionic/react";
import { faH, faHome, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../styles/components/CustomButton.css";
import React, { ReactElement } from "react";

interface CustomButtonProps {
  text: string;
  IconElement: IconDefinition;
  onclickHandler: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  IconElement,
  onclickHandler,
}) => {
  return (
    <div className="squared-button" onClick={onclickHandler}>
      <FontAwesomeIcon icon={IconElement} className="button-icon" />
      <p className="button-text">{text}</p>
    </div>
  );
};

export default CustomButton;

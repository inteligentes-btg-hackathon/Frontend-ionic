import { IonFooter, IonHeader } from "@ionic/react";
import { ReactElement } from "react";
import "../styles/components/InformativeFooter.css";

interface InformativeFooterProps {
  footerTitle: string;
  footerIcon: ReactElement;
  footerText: string;
  footerActionElement: ReactElement;
}

const InformativeFooter: React.FC<InformativeFooterProps> = ({
  footerTitle,
  footerIcon,
  footerText,
  footerActionElement,
}) => {
  return (
    <div>
      <IonHeader className="block-header">
        <h5>{footerTitle}</h5>
        {footerIcon}
      </IonHeader>

      <div className="block-content">
        <h6 className="block-text">{footerText}</h6>
        <IonFooter className="block-footer">{footerActionElement}</IonFooter>
      </div>
    </div>
  );
};

export default InformativeFooter;

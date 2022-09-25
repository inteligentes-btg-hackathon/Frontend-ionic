import "../styles/components/HelpAccordion.css";
import { 
  IonAccordion, 
  IonAccordionGroup,
  IonItem, 
  IonLabel
} from '@ionic/react';

const HelpAccordion: React.FC<{}> = ({}) => {
  return (
    <div>
      <IonAccordionGroup>
        <IonAccordion value="first">
          <IonItem slot="header" color="light">
            <IonLabel className="OptionsBlock">First Accordion</IonLabel>
          </IonItem>
          <div slot="content" className="ItensBlock">
            First Content
          </div>
        </IonAccordion>
        <IonAccordion value="second" >
          <IonItem slot="header" color="light">
            <IonLabel className="OptionsBlock">Second Accordion</IonLabel>
          </IonItem>
          <div slot="content" className="ItensBlock">
            Second Content
          </div>
        </IonAccordion>
        <IonAccordion value="third">
          <IonItem slot="header" color="light">
            <IonLabel className="OptionsBlock">Third Accordion</IonLabel>
          </IonItem>
          <div slot="content" className="ItensBlock">
            Third Content
          </div>
        </IonAccordion>
      </IonAccordionGroup>
    </div>
  );
};

export default HelpAccordion;

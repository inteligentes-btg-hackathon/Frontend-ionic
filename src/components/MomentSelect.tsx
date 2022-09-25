import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";

import "../styles/components/MomentSelect.css";

interface MomentSelectProps {
  title: string;
  items: Array<string>;
}

const MomentSelect: React.FC<MomentSelectProps> = ({ items, title }) => {
  return (
    <div className="contentBlock">
      <h3>{title}</h3>
      <IonItem className="sub-block">
        <IonSelect
          interface="action-sheet"
          placeholder="Selecione o ano"
          className="item-select"
        >
          {items.map((item) => {
            return (
              <IonSelectOption value={item} className="teste">
                {item}
              </IonSelectOption>
            );
          })}
        </IonSelect>
      </IonItem>
    </div>
  );
};

export default MomentSelect;

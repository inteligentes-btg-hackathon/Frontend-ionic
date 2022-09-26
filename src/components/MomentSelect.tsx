import { IonItem, IonList, IonSelect, IonSelectOption } from "@ionic/react";

import "../styles/components/MomentSelect.css";

interface MomentItem {
  title: string;
  value: string | number;
}
interface MomentSelectProps {
  title: string;
  items: Array<MomentItem>;
  onIonChangeHandler: ({}: any) => void;
}

const MomentSelect: React.FC<MomentSelectProps> = ({
  items,
  title,
  onIonChangeHandler,
}) => {
  return (
    <div className="contentBlock">
      <h3>{title}</h3>
      <IonItem className="sub-block">
        <IonSelect
          interface="action-sheet"
          placeholder="Selecione o ano"
          className="item-select"
          onIonChange={(e) => {
            onIonChangeHandler(e.detail.value);
          }}
        >
          {items.map((item) => {
            return (
              <IonSelectOption value={item.value} className="teste">
                {item.title}
              </IonSelectOption>
            );
          })}
        </IonSelect>
      </IonItem>
    </div>
  );
};

export default MomentSelect;

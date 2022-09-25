import { IonCol, IonGrid, IonItem, IonRow } from "@ionic/react";
import { ReactElement } from "react";
import "../../styles/components/ListItemShare.css";

interface ListItemShareProps {
  itemTitle: string;
  itemSubtitle: string;
  itemIcon: ReactElement;
}

const ListItemShare: React.FC<ListItemShareProps> = ({
  itemTitle,
  itemSubtitle,
  itemIcon,
}) => {
  return (
    <IonItem className="share-item" lines={"none"}>
      <IonCol size="8">
        <div className="share-item">
          <div className="left-section">
            <h5 className="title">{itemTitle}</h5>
            <h6 className="subtitle">{itemSubtitle}</h6>
          </div>
        </div>
      </IonCol>
      <IonCol size="4">
        <div className="right-section">{itemIcon}</div>
      </IonCol>
    </IonItem>
  );
};

export default ListItemShare;

import { IonContent, IonList, IonItemGroup } from "@ionic/react";
import { ReactElement } from "react";
import "../../styles/components/ListBox.css";
import ListItemShare from "./ListItemShare";

interface Item {
  itemTitle: string;
  itemSubtitle: string;
  itemIcon: ReactElement;
}

interface ListBoxProps {
  items: Item[];
}

const ListBox: React.FC<ListBoxProps> = ({ items }) => {
  return (
    <IonContent fullscreen className="content-block">
      <div className="list-wrapper">
        <IonList className="test">
          {items.map((item, i) => {
            return (
              <ListItemShare
                key={i}
                itemTitle={item.itemTitle}
                itemSubtitle={item.itemSubtitle}
                itemIcon={item.itemIcon}
              />
            );
          })}
        </IonList>
      </div>
    </IonContent>
  );
};

export default ListBox;

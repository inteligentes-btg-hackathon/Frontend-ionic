import { IonList } from "@ionic/react";
import "../../styles/components/StockListBox.css";
import ListItemStock from "./ListItemStock";

interface Item {
  itemTitle: string;
  itemTransactionResult: string;
  isLoss: boolean;
}

interface StockListBoxProps {
  items: Item[];
}

const StockListBox: React.FC<StockListBoxProps> = ({ items }) => {
  return (
    <IonList className="ion-list-background">
      <>
        {items.map((item, i) => {
          return (
            <ListItemStock
              key={i}
              itemTitle={item.itemTitle}
              itemTransactionResult={item.itemTransactionResult}
              isLoss={item.isLoss}
            />
          );
        })}
      </>
    </IonList>
  );
};

export default StockListBox;

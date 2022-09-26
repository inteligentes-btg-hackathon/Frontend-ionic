import { IonList } from "@ionic/react";
import "../../styles/components/StockListBox.css";
import ListItemStock, { ListItemStockProps } from "./ListItemStock";

interface StockListBoxProps {
  items: Array<ListItemStockProps>;
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
              itemMonth={item.itemMonth}
              itemDay={item.itemDay}
              isLoss={item.isLoss}
            />
          );
        })}
      </>
    </IonList>
  );
};

export default StockListBox;

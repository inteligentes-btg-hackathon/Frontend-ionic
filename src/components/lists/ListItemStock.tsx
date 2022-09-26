import { IonItem } from "@ionic/react";
import "../../styles/components/ListItemStock.css";

export interface ListItemStockProps {
  itemTitle: string;
  itemTransactionResult: string;
  itemMonth: string;
  itemDay: string;
  itemType?: string;
  isLoss: boolean;
}

const ListItemStock: React.FC<ListItemStockProps> = ({
  itemTitle,
  itemTransactionResult,
  itemMonth,
  itemDay,
  isLoss,
}) => {
  let stockMark = "green-mark";
  if (isLoss) {
    stockMark = "red-mark";
  }

  return (
    <IonItem className={`stock-item ${stockMark}`} lines={"none"}>
      <div className="block-section">
        <div className="left-section-stock">
          <div className="date-box">
            <h5 className="date-title">{itemDay}</h5>
            <h6 className="date-month">{itemMonth}</h6>
          </div>
          <div className="info-block">
            <h5 className="title">{itemTitle}</h5>
          </div>
        </div>
        <div className="right-section-stock">
          <h5 className="price-text">R${itemTransactionResult}</h5>
        </div>
      </div>
    </IonItem>
  );
};

export default ListItemStock;

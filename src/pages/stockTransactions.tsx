import { IonContent, IonPage } from "@ionic/react";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import NavHeaderDefault from "../components/headers/NavHeaderDefault";
import { ListItemStockProps } from "../components/lists/ListItemStock";
import StockListBox from "../components/lists/StockListBox";
import ListTabNavigator, {
  ButtonElement,
} from "../components/ListTabNavigator";
import MomentSelect from "../components/MomentSelect";
import { ApplicationContext } from "../contexts/ApplicationContext";

import "../styles/stockTransactions.css";

const StockTransactions: React.FC = () => {
  const history = useHistory();

  //Context
  const {
    getStockTransactionHistory,
    stockTransactionHistory,
    stockTransactionOptionList,
  } = useContext(ApplicationContext);

  // State
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [typeTransactionList, setTypeTransactionList] = useState<
    ListItemStockProps[]
  >([]);
  const [buttonListState, setButtonListState] = useState([
    { text: "Carregando", onClickHandler: () => {} },
  ]);

  // React API
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const defaultPeriod = `${year}-${month}`;
    setSelectedPeriod(defaultPeriod);
    getStockTransactionHistory(selectedPeriod);
  }, []);

  useEffect(() => {
    setTypeTransactionList(stockTransactionHistory);
  }, [stockTransactionHistory]);

  // Handlers
  const filterTransactionByTypeHandler = (transactionType: string) => {
    const filteredTransactionList = stockTransactionHistory.filter((item) => {
      return item.itemType == transactionType;
    });
    setTypeTransactionList(filteredTransactionList);
  };

  useEffect(() => {
    let buttonList: ButtonElement[] = [
      {
        text: "Todas as Operações",
        onClickHandler: () => {
          setTypeTransactionList(stockTransactionHistory);
        },
      },
    ];
    stockTransactionOptionList?.forEach((transactionType) => {
      const cleanText = transactionType.replace("_", " ");
      buttonList.push({
        text: cleanText.charAt(0).toUpperCase() + cleanText.slice(1),
        onClickHandler: () => {
          filterTransactionByTypeHandler(transactionType);
        },
      });
    });
    setButtonListState(buttonList);
  }, [stockTransactionOptionList]);

  return (
    <IonPage>
      <IonContent>
        <NavHeaderDefault
          leftArrowClickHandler={() => {
            alert("left click");
          }}
          closeIconClickHandler={() => {
            history.goBack();
          }}
          showCloseButton
          showLeftArrow
        />
        <MomentSelect
          title="Selecione o período:"
          items={[
            { title: "Novembro/2022", value: "2022-11" },
            { title: "Dezembro/2022", value: "2022-12" },
            { title: "Janeiro/2023", value: "2023-01" },
            { title: "Fevereiro/2023", value: "2023-02" },
            { title: "Março/2023", value: "2023-03" },
            { title: "Abril/2023", value: "2023-04" },
          ]}
          onIonChangeHandler={getStockTransactionHistory}
        />
        <ListTabNavigator buttonList={buttonListState} />
        <div className="tax-fee-info">
          <h5>Total de Impostos: R$ 12.000,00</h5>
        </div>

        <StockListBox items={typeTransactionList} />
      </IonContent>
    </IonPage>
  );
};

export default StockTransactions;

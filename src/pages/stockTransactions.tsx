import { IonPage } from "@ionic/react";
import NavHeaderDefault from "../components/headers/NavHeaderDefault";
import StockListBox from "../components/lists/StockListBox";
import ListTabNavigator from "../components/ListTabNavigator";
import MomentSelect from "../components/MomentSelect";

import "../styles/stockTransactions.css";

const itemList = [
  {
    itemTitle: "BRKM5",
    itemSubtitle: "Braskem S.A.",
    itemTransactionResult: "500.000,00",
    isLoss: false,
  },
  {
    itemTitle: "GOGL34",
    itemSubtitle: "09/09/2022",
    itemTransactionResult: "12.000,00",
    isLoss: true,
  },
  {
    itemTitle: "Tesla, Inc.",
    itemSubtitle: "08/09/2022",
    itemTransactionResult: "8.000,00",
    isLoss: false,
  },
  {
    itemTitle: "Simulação 15#",
    itemSubtitle: "10/07/2022",
    itemTransactionResult: "500.000,00",
    isLoss: false,
  },
  {
    itemTitle: "Simulação 14#",
    itemSubtitle: "10/06/2022",
    itemTransactionResult: "500.000",
    isLoss: true,
  },
  {
    itemTitle: "Simulação 13#",
    itemSubtitle: "10/05/2022",
    itemTransactionResult: "500.000,00",
    isLoss: false,
  },
  {
    itemTitle: "Simulação 12#",
    itemSubtitle: "10/04/2022",
    itemTransactionResult: "500.000,00",
    isLoss: false,
  },
  {
    itemTitle: "Simulação 11#",
    itemSubtitle: "10/03/2022",
    itemTransactionResult: "500.000,00",
    isLoss: true,
  },
];

const StockTransactions: React.FC = () => {
  return (
    <IonPage>
      <NavHeaderDefault
        leftArrowClickHandler={() => {
          alert("left click");
        }}
        closeIconClickHandler={() => {
          alert("close-click");
        }}
        showCloseButton
        showLeftArrow
      />
      <MomentSelect
        title="Selecione o período:"
        items={["Dezembro/2019", "Janeiro/2020"]}
      />
      <ListTabNavigator
        buttonList={[
          { text: "Todas as Operações", onClickHandler: () => {} },
          { text: "BDR's", onClickHandler: () => {} },
          { text: "Swing Trade", onClickHandler: () => {} },
          { text: "Day Trade", onClickHandler: () => {} },
        ]}
      />
      <div className="tax-fee-info">
        <h5>Total de Impostos: R$ 12.000,00</h5>
      </div>

      <StockListBox items={itemList} />
    </IonPage>
  );
};

export default StockTransactions;

import React, { createContext, useEffect, useMemo, useState } from "react";
import { ListItemStockProps } from "../components/lists/ListItemStock";

import { getStockTransactionsRecords } from "../data/facilita";
// import {
//   ILogin,
//   IRegister,
//   login,
//   register,
//   verifyToken,
// } from "../services/Application";

export interface IChildren {
  children?: React.ReactNode;
}

export interface stockTransactionHistoryProps {
  id: number;
  bank_id: number;
  name: string;
  itype: string;
  exempt: boolean;
  sell_date: string;
  buy_date: string;
  price: number;
  rate: number;
}

export interface IProviderValue {
  lastMonthTaxAmount: Number;
  lastMonthProfitAmount: Number;
  hasPendingDarf: boolean;
  lastMonthPercentageInsight: Number;
  getStockTransactionHistory: (date: string) => void;
  stockTransactionHistory: Array<ListItemStockProps>;
  stockTransactionOptionList: string[];
}

export const ApplicationContext = createContext({} as IProviderValue);

export function ApplicationProvider({ children }: IChildren) {
  const [currentCustomerId, setCurrentCustomerId] = useState("44801389864");
  const [lastMonthTaxAmount, setLastMonthTaxAmount] = useState(0.0);
  const [lastMonthProfitAmount, setLastMonthProfiAmount] = useState(0.0);
  const [lastMonthPercentageInsight, setLastMonthPercentageInsight] =
    useState(0);

  const [hasPendingDarf, setHasPendingDarf] = useState(true);
  const [stockTransactionHistory, setTransactionHistory] = useState<any>([]);
  const [stockTransactionOptionList, setStockTransactionOptionList] = useState<
    string[]
  >([]);

  async function getStockTransactionHistory(date: string) {
    const data: stockTransactionHistoryProps[] =
      await getStockTransactionsRecords({
        customerId: currentCustomerId,
        date,
      });

    const processedData = data.map((item) => {
      const elementDate = new Date(item.sell_date);
      elementDate.setTime(elementDate.getTime() + 3 * 60 * 60 * 1000);
      return {
        id: item.id,
        itemTitle: item.name.toUpperCase(),
        itemSubtitle: item.sell_date,
        itemTransactionResult: item.price,
        itemMonth: elementDate.toLocaleString("default", { month: "short" }),
        itemDay: elementDate.getDate().toString(),
        itemYear: elementDate.getFullYear().toString(),
        itemType: item.itype,
        isLoss: false,
      };
    });
    setTransactionHistory(processedData);

    const processedTransactionOptions = processedData
      .map((item) => item.itemType)
      .filter((value, index, self) => self.indexOf(value) === index);
    setStockTransactionOptionList(processedTransactionOptions);
  }

  const memoedValue = useMemo(
    () => ({
      lastMonthTaxAmount,
      lastMonthProfitAmount,
      hasPendingDarf,
      lastMonthPercentageInsight,
      getStockTransactionHistory,
      stockTransactionHistory,
      stockTransactionOptionList,
    }),
    [hasPendingDarf, stockTransactionHistory]
  );

  return (
    <ApplicationContext.Provider value={memoedValue}>
      {children}
    </ApplicationContext.Provider>
  );
}

import React, { createContext, useEffect, useMemo, useState } from "react";
import { ListItemStockProps } from "../components/lists/ListItemStock";
import { FileOpener } from "@ionic-native/file-opener";

import {
  generateDarfSimulation,
  getStockTransactionsRecords,
} from "../data/facilita";

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
  loading: boolean;
  simulatedDarfLink: string;
  generateDarf: (date: string) => void;
}

export const ApplicationContext = createContext({} as IProviderValue);

export function ApplicationProvider({ children }: IChildren) {
  const [loading, setLoading] = useState(false);

  const [currentCustomerId, setCurrentCustomerId] = useState("44801389864");
  const [lastMonthTaxAmount, setLastMonthTaxAmount] = useState(2003.00);
  const [lastMonthProfitAmount, setLastMonthProfiAmount] = useState(12.000);
  const [lastMonthPercentageInsight, setLastMonthPercentageInsight] =
    useState(10);

  const [simulatedDarfLink, setSimulatedDarfLink] = useState("");
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

  async function generateDarf(date: string) {
    console.log(123);
    setLoading(true);
    const pdfData = await generateDarfSimulation({
      customerId: currentCustomerId,
      date,
    });
    setSimulatedDarfLink(pdfData);
    setLoading(false);
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
      loading,
      simulatedDarfLink,
      generateDarf,
    }),
    [hasPendingDarf, stockTransactionHistory]
  );

  return (
    <ApplicationContext.Provider value={memoedValue}>
      {children}
    </ApplicationContext.Provider>
  );
}

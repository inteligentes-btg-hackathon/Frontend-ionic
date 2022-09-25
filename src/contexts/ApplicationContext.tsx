import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

// import {
//   ILogin,
//   IRegister,
//   login,
//   register,
//   verifyToken,
// } from "../services/Application";

export interface IProviderValue {
  lastMonthTaxAmount: Number;
  lastMonthProfitAmount: Number;
  hasPendingDarf: boolean;
  lastMonthPercentageInsight: Number;
}

export interface IChildren {
  children?: React.ReactNode;
}

export const ApplicationContext = createContext({} as IProviderValue);

export function ApplicationProvider({ children }: IChildren) {
  const [lastMonthTaxAmount, setLastMonthTaxAmount] = useState(0.0);
  const [lastMonthProfitAmount, setLastMonthProfiAmount] = useState(0.0);
  const [lastMonthPercentageInsight, setLastMonthPercentageInsight] =
    useState(0);
  const [hasPendingDarf, setHasPendingDarf] = useState(true);

  const memoedValue = useMemo(
    () => ({
      lastMonthTaxAmount,
      lastMonthProfitAmount,
      hasPendingDarf,
      lastMonthPercentageInsight,
    }),
    [hasPendingDarf]
  );

  return (
    <ApplicationContext.Provider value={memoedValue}>
      {children}
    </ApplicationContext.Provider>
  );
}

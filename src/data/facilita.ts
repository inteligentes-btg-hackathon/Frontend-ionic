import axios from "axios";

import * as API from "../constants";

interface GetStockTransactionsRecordsProps {
  customerId: string;
  date: string;
}

export async function getStockTransactionsRecords({
  customerId,
  date,
}: GetStockTransactionsRecordsProps) {
  const data = await axios.get(
    `${API.TRANSACTIONS_ENDPOINT}/?customer_id=${customerId}&sellout=true&date=${date}`
  );

  return data.data;
}

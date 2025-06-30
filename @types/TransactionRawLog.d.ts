// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export interface TransactionRawLog {
  logIndex: number;
  transactionIndex: number;
  transactionHash: string;
  blockHash: string;
  blockNumber: number;
  address: string;
  data: string;
  topics: string[];
  type: string;
  id: string;
}

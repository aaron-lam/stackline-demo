import { createSlice } from "@reduxjs/toolkit";
import data from "@/data/mock";

export interface Sale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export interface ProductInfo {
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
  sales: Sale[];
}

export interface CounterState {
  data: ProductInfo[];
}

const initialState: CounterState = {
  data: [],
};

export const productInfoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    fetchData: (state) => {
      state.data = data;
    },
  },
});

export const { fetchData } = productInfoSlice.actions;

export default productInfoSlice.reducer;

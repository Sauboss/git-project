import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PizzaSliceState } from "./types";
import axios from "axios";


  
  export const fethShares = createAsyncThunk<any, any>('pizza/fetchPizzasStatus', async (params) => {
    const  { data }  = await axios.get<any>(
      `https://cloud.iexapis.com/stable/stock/market/batch?symbols=aapl,msft,tsla,amzn,fb,goog,nflx,nvda,amc,gme&types=quote&token=sk_4f8f211b92824ff790248792681bfdcb`,
    );
  
    return data;
  });
  
  
  const initialState:PizzaSliceState = {
    items: [],
    status: 'loading',
  };
  
  const pizzasSlice = createSlice({
    name: 'shares',
    initialState,
    reducers: {
      setItems(state, action:PayloadAction<any>) {
        state.items = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fethShares.pending, (state) => {
          state.status = 'loading';
          state.items = [];
        })
        .addCase(fethShares.fulfilled, (state, action) => {
          state.items = action.payload;
          state.status = 'success';
        })
        .addCase(fethShares.rejected, (state) => {
          state.status = 'error';
          state.items = [];
        });
    },
  });
  
  
  export const { setItems } = pizzasSlice.actions;
  
  export default pizzasSlice.reducer;
  
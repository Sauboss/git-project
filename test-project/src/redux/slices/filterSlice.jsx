import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

const initialState = {
  items: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items.push({ ...action.payload });
    },
  },
});

// export const selectSort = (state:RootState) => state.filter.sort;
// export const selectFilter = (state:RootState) => state.filter;

export const { setItems } = filterSlice.actions;

export default filterSlice.reducer;

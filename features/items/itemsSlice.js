import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setViewItem(state, action) {
      const { id } = action.payload;
      const viewedItem = state.data.find((item) => item.id === id);
      if (viewedItem) {
        viewedItem.viewed = true;
      }
    },
  },
});

export const { setData, setViewItem } = itemsSlice.actions;
export const selectAllItems = (state) => state.items.data;
export const selectedItemById = (state, id) =>
  state.items.data.find((item) => item.id == id);
export const selectViewedItems = (state) =>
  state.items.data.filter((item) => item.viewed === true);

export default itemsSlice.reducer;

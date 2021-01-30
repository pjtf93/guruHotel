import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchItems from '../../lib/fetchItems';

export const fetchQuery = createAsyncThunk(
  'items/fetchQuery',
  async (query) => {
    const data = await fetchItems(query);
    // console.log(data);
    console.log('hi 1');
    return data;
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchQuery.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default itemsSlice.reducer;

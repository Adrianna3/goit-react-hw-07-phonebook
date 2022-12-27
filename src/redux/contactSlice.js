import { createSlice } from '@reduxjs/toolkit';
import { loadFromLocalStorage } from 'services/localStorageServices';

const initialState = {
  items: loadFromLocalStorage('LOCALSTORAGE_KEY'),
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;

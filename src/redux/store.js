import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import { contactsApi } from 'services/contactsApi';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

export default store;
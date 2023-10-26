import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAddContacts,
  fetchContacts,
  fetchDeleteContacts,
} from 'services/api';

export const requestContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contactsData = await fetchContacts();
      return contactsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkApi) => {
    try {
      const contactsData = await fetchAddContacts(contactData);
      return contactsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const contactsData = await fetchDeleteContacts(id);
      return contactsData;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

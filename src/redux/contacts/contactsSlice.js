import { createSlice } from '@reduxjs/toolkit';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import { addContacts, deleteContacts, requestContacts } from './operations';
// import { fetchAddContacts } from 'services/api';

const INITIAL_STATE = {
  contacts: {
    item: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    // addContact(state, action) {
    //   state.contacts = [...state.contacts, action.payload];
    // },
    // deleteContact(state, action) {
    //   state.contacts = state.contacts.filter(
    //     contact => contact.id !== action.payload
    //   );
    // },

    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReduсers: builder =>
    builder
      .addCase(requestContacts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.item = action.payload;
      })
      .addCase(requestContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Add contacts

      .addCase(addContacts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.item.push(action.payload);
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete contacts

      .addCase(deleteContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.item = state.contacts.item.filter(
          contact => contact.id !== action.payload
        );
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };
// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, deleteContact, filterContact } =
//   contactsSlice.actions;

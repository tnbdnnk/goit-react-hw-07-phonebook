import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations/contactsThunk';

const contactsInitialState = {
    items: [],
    error: null,
    isLoading: false
};

const contactSlice = createSlice({
    name: 'phone',
    initialState: contactsInitialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.items = action.payload;
                state.error = null;
                state.isLoading = false;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(deleteContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.items = state.items.filter(
                item => item.id !== action.payload
                );
                state.error = null;
                state.isLoading = false;
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            })
            .addCase(addContact.pending, state => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.items = [action.payload, ...state.items];
                state.error = null;
                state.isLoading = false;
            })
            .addCase(addContact.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    },
})

export const contactReducer = contactSlice.reducer;
// export const { addContact, deleteContact } = contactSlice.actions;
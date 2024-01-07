import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations/contactsThunk';

const contactsInitialState = {
    items: [],
    error: '',
    isLoading: false
};

const contactSlice = createSlice({
    name: 'contacts',
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
                    item => item.id !== action.payload.id
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
// export const { addContact, deleteContact, checkExistingContact, fetchData, isPending, isError } = contactSlice.actions;

// const handlePending = state => {
//     state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// };

// const contactsSlice = createSlice({
//     name: 'contacts',
//     initialState: {
//         items: [],
//         isLoading: false,
//         error: null,
//     },

//     extraReducers: builder => {
//         builder
//             .addCase(fetchContacts.pending, handlePending)
//             .addCase(fetchContacts.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.error = null;
//                 state.items = action.payload;
//             })
//             .addCase(fetchContacts.rejected, handleRejected)
//             .addCase(addContact.pending, handlePending)
//             .addCase(addContact.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.error = null;
//                 state.items.push(action.payload);
//             })
//             .addCase(addContact.rejected, handleRejected)
//             .addCase(deleteContact.pending, handlePending)
//             .addCase(deleteContact.fulfilled, (state, action) => {
//                 state.isLoading = false;
//                 state.error = null;
//                 const index = state.items.findIndex(
//                     contact => contact.id === action.payload.id
//                 );
//                 state.items.splice(index, 1);
//             })
//             .addCase(deleteContact.rejected, handleRejected);
//     }
// })

// export const contactReducer = contactsSlice.reducer;
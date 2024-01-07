import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: { filter: ''},
    reducers: {
        filterContacts(state, action) {
            state.filter = action.payload;
        },
    },
});

export const filterReducer = filterSlice.reducer;
export const { filterContacts } = filterSlice.actions;

// const filterSlice = createSlice({
//     name: 'filter',
//     initialState: '',
//     reducers: {
//         filterContacts(state, { payload }) {
//             return payload;
//         },
//     },
// })

// export const { filterContacts } = filterSlice.actions;
// export const filterReducer = filterSlice.reducer;
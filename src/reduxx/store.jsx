// import {
//     FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
// } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";

const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

// export const store = configureStore({
//     reducer: {
//         contacts: contactReducer,
//         filter: filterReducer,
//     },
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//         serializableCheck: {
//             ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// });

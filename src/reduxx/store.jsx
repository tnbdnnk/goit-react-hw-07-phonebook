// import {
//     persistStore,
//     persistReducer,
//     FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactReducer } from "./contactSlice";
import { filterReducer } from "./filterSlice";

// const persistConfig = {
//     key: 'contacts',
//     storage,
// }

// const persistedContactReducer = persistReducer(persistConfig, contactReducer);

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

const rootReducer = combineReducers({
    contacts: contactReducer,
    filter: filterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
})
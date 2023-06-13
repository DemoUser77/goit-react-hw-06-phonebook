import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactsSlice';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
   key:'contacts',
    storage,
};

const persistedContactReducer = persistReducer(persistConfig, contactReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});


export const persistor = persistStore(store);

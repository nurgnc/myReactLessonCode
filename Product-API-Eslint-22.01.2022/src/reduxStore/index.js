import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { visitedProductReducer } from "./visitedProducts";

const rootReducer = combineReducers({
  visitedProducts: visitedProductReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["visitedProducts"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
// export const store = createStore(rootReducer)
store.subscribe(() => console.log("STATE LOG:::", store.getState()))
export const persistor = persistStore(store)


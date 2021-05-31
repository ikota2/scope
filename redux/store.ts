import { createStore, combineReducers } from 'redux';

import { optionsReducer } from './optionsReducer';


const rootReducer = combineReducers({
    options: optionsReducer,
});

const store = createStore(rootReducer);

//Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch


export default store;

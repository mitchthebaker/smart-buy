import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';

//import cardsReducer from './cardsSlice';
import { timelineApi } from './services/timelineApi';

/*const appReducer = combineReducers({
  cards,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};*/

export const store =  configureStore({
  reducer: {
    [timelineApi.reducerPath]: timelineApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(logger)
    .concat(timelineApi.middleware),
});

setupListeners(store.dispatch);

export default store;


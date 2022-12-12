import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import cardsReducer from './cardsSlice';

/*const appReducer = combineReducers({
  cards,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};*/

export default configureStore({
  reducer: {
    cards: cardsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: [
    {
      id: 1,
      ema13: 3220,
      ema63: 3231
    },
    {
      id: 2,
      ema13: 3210,
      ema63: 328
    },
    {
      id: 3,
      ema13: 3228,
      ema63: 3239
    }
  ],
  reducers: {
    getCards(state, action) {
      return state;
    },
    addCard(state, action) {
      state.push({
        id: action.payload.id,
        ema13: action.payload.ema13,
        ema63: action.payload.ema63
      });
    }
  }
});

export const selectCards = state => state.cards; 

export const { getCards, addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
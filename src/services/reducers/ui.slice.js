import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileOpen: false,
  expandedCardIndex: null
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setMobileOpen: (state, action) => {
      state.mobileOpen = action.payload;
    },
    setExpandedCardIndex: (state, action) => {
      state.expandedCardIndex = action.payload;
    },
  },
});

export const { setMobileOpen, setExpandedCardIndex } = uiSlice.actions;

export default uiSlice.reducer;
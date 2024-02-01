import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobileOpen: false,
  expandedCardIndex: null,
  loading: false,
  snackbar: null,
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSnackbar: (state, action) => {
      state.snackbar = action.payload;
    },
  },
});

export const { setMobileOpen, setExpandedCardIndex, setLoading, setSnackbar } =
  uiSlice.actions;

export default uiSlice.reducer;

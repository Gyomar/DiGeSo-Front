import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import endPoints from '../api';
import { setLoading, setSnackbar } from './ui.slice';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const postMessage = createAsyncThunk(
  'contactUsForm/postMessage',
  async ({ newMessage }, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      await axios.post(
        endPoints.sendEmail,
        newMessage
      );
      dispatch(setSnackbar({ children: 'Mensaje enviado con Exito', severity: 'success' }));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      dispatch(setSnackbar({ children: error, severity: 'error' }));
    }
  },
);

export const contactUsFormSlice = createSlice({
  name: 'contactUsForm',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setMessage,
} = contactUsFormSlice.actions;

export default contactUsFormSlice.reducer;
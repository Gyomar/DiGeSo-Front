import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
//import endPoints from '../api';
import { setLoading, setSnackbar } from './ui.slice';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const postMessage = createAsyncThunk(
  'contactUsForm/postMessage',
  async ({ newMessage }, { dispatch }) => {
    dispatch(setLoading(true));
    await axios
      .post('https://api.digesolutions.com/sendEmail.php', newMessage, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        let message = '';
        let severity = '';
        if (response.data === 1) {
          message = 'Consulta enviada con éxito';
          severity = 'success';
        } else if (response.data === 2) {
          message = 'Error al enviar la consulta intenta mas tarde';
          severity = 'error';
        } else if (response.data === 3) {
          message =
            'Error: Todos los campos son obligatorios';
          severity = 'error';
        }
        dispatch(setLoading(false));
        dispatch(setSnackbar({ children: message, severity: severity }));
      })
      .catch((error) => {
        dispatch(setLoading(false));
        dispatch(setSnackbar({ children: error, severity: 'error' }));
      });
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

export const { setName, setEmail, setMessage } = contactUsFormSlice.actions;

export default contactUsFormSlice.reducer;

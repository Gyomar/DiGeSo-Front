const isDevelopment = import.meta.env.MODE === 'development';
const API = isDevelopment ? 'http://localhost:3000' : import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const endPoints = {
  apiKey,
  sendEmail: `${API}/send-email`,
};

export default endPoints;

const API = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const createEndpoint = (basePath, routes) => {
  const createUrl = (path, params) => {
    const notSlash = typeof params === 'string' && (params.startsWith('?') || params === '');
    const separator = notSlash ? '' : '/';

    return `${path}${separator}${params}`;
  };

  const result = {};

  for (const [key, value] of Object.entries(routes)) {
    if (typeof value === 'function') {
      result[key] = (...args) => createUrl(basePath, value(...args));
    } else {
      result[key] = createUrl(basePath, value);
    }
  }

  return result;
};

const endPoints = {
  apiKey,
  sendEmail: `${API}/send-email`,
};

export default endPoints;

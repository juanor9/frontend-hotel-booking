const BASE_URL = process.env.REACT_APP_BASE_URL;

export const generatePayment = async (options) => {
  const response = await fetch(`${BASE_URL}/api/payments`, options);
  const data = await response.json();
  return data;
};

export default generatePayment;

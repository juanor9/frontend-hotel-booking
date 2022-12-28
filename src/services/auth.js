export default async function validateUserMailToken(token) {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/local/activate/${token}`);
  const data = response.json();

  return data;
}

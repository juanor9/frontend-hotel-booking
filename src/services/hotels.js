const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createHotel = async (hotel) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hotel),
  };

  const res = await fetch(`${BASE_URL}/api/hotels`, options);
  const result = await res.json();
  return result;
};

export const getHotels = async () => {
  const res = await fetch(`${BASE_URL}/api/hotels`);
  const result = await res.json();
  return result;
};

export const deleteHotel = async (id) => {
  const options = {
    method: 'DELETE',
  };

  const res = await fetch(`${BASE_URL}/api/hotels/${id}`, options);
  const result = await res.json();
  return result;
};

export const updateHotel = async (hotel) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hotel),
  };

  const res = await fetch(`${BASE_URL}/api/hotels/${hotel._id}`, options);
  const result = await res.json();
  return result;
};

export const createHotel = async (hotel) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(hotel),
  };

  const res = await fetch('http://localhost:8080/hotels', options);
  const result = await res.json();
  return result;
};

export const getHotels = async () => {
  const res = await fetch('http://localhost:8080/hotels');
  const result = await res.json();
  return result;
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createBooking = async (booking) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  };

  const res = await fetch(`${BASE_URL}/api/bookings`, options);
  const result = await res.json();
  return result;
};

export const getBookings = async () => {
  const res = await fetch(`${BASE_URL}/api/bookings`);
  const result = await res.json();
  return result;
};

export const deleteBooking = async (id) => {
  const options = {
    method: 'DELETE',
  };

  const res = await fetch(`${BASE_URL}/api/bookings/${id}`, options);
  const result = await res.json();
  return result;
};

export const updateBooking = async (booking, id) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  };

  const res = await fetch(`${BASE_URL}/api/bookings/${id}`, options);
  const result = await res.json();
  return result;
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const createRoom = async (room) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(room),
  };

  const res = await fetch(`${BASE_URL}/api/rooms`, options);
  const result = await res.json();
  return result;
};

export const getRooms = async () => {
  const res = await fetch(`${BASE_URL}/api/rooms`);
  const result = await res.json();
  return result;
};

export const deleteRoom = async (id) => {
  const options = {
    method: 'DELETE',
  };

  const res = await fetch(`${BASE_URL}/api/rooms/${id}`, options);
  const result = await res.json();
  return result;
};

export const updateRoom = async (room, id) => {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(room),
  };

  const res = await fetch(`${BASE_URL}/api/rooms/${id}`, options);
  const result = await res.json();
  return result;
};

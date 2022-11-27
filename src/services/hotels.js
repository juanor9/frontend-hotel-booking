const createHotel = async (hotel) => {
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

export default createHotel;

export async function deleteHotel(id) {
  const options = {
    method: 'DELETE',
  };
  const res = await fetch(`http://localhost:8080/api/hotels${id}`, options);
  const result = await res.json();
  return result;
}

export async function updateHotel(id) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  };
  const res = await fetch(`http://localhost:8080/api/hotels${id}`, options);
  const result = await res.json();
  return result;
}

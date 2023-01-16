const calculateDays = (checkIn, checkout) => {
  const date1 = new Date(checkIn).getTime();
  const date2 = new Date(checkout).getTime();
  const diffInMilliseconds = date2 - date1;
  const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
  return diffInDays;
};

export default calculateDays;

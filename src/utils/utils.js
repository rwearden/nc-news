export const convertTime = (timeString) => {
  const year = timeString.slice(0, 4);
  const month = timeString.slice(5, 7);
  const day = timeString.slice(8, 10);
  return `${day}/${month}/${year}`;
};

export const convertToTime = (timestamp, seconds = false) => {
  let end = (seconds ? 19 : 16);
  return timestamp.toString().slice(11, end);
};
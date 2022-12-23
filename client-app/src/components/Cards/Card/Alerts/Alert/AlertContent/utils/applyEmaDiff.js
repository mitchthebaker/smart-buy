export const applyEmaDiff = (ema_difference) => {
  if(ema_difference === null) return 'default--color';
  else if(ema_difference <= 5) return 'red--color';
  else if(ema_difference > 5 && ema_difference <= 7.5) return 'yellow--color';
  else return 'green--color';
};
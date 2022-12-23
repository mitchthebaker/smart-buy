export const applyBold = (string) => {
  return string.split(' ').map(str => {
    if(str.toUpperCase()) {
      console.log(str);
      return <b> {str} </b>;
    }
    else 
      return <span> {str} </span>;
  })
};
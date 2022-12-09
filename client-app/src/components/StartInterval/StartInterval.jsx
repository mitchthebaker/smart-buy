import axios from 'axios';
import Button from '../Button';

const StartInterval = () => {

  const handleStart = () => {
    axios.get(`${process.env.REACT_APP_API_GATEWAY_URI}/api/scheduler/startInterval`, { 
      params: { 
        ticker: 'SPX',
        interval: '5min',
      } 
    })
      .then(result => {
        // do something with the response sent from server
        const data = result.data;
        console.log(data);

        // without websockets you'll have to refresh the page 
        // to see 'messages' update with the new message
      })
      .catch(err => {
        console.error(`${err}`);
      });
  };

  return (
    <Button onClick={handleStart}>
      <span> Start Interval </span>
    </Button>
  );
};

export default StartInterval;
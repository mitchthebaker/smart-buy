import { useState } from 'react';
import axios from 'axios';

// pages
import Landing from '../../pages/Landing';

const App = () => {
  /*const handleStartInterval = () => {
    axios.get(`${process.env.REACT_APP_API_GATEWAY_URI}/api/scheduler/startInterval`, { 
      params: { 
        ticker: ticker,
        interval: interval,
      } 
    })
      .then(result => {
        // do something with the response sent from server
        const data = result.data;;
        console.log(data);

        // without websockets you'll have to refresh the page 
        // to see 'messages' update with the new message
      })
      .catch(err => {
        console.error(`${err}`);
      });
  };

  const handleStopInterval = () => {
    axios.get(`${process.env.REACT_APP_API_GATEWAY_URI}/api/scheduler/stopInterval`)
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
  };*/

  return (
    <main>
      <Landing />
    </main>
  );
};

export default App;

/*
<div>
  <button onClick={handleStartInterval}> Start interval </button>
  <button onClick={handleStopInterval}> Stop interval </button>
</div>
*/

/*useEffect(() => {
    // Send a request to api-gateway, whose URI is specified in .env
    axios.get(`${process.env.REACT_APP_API_GATEWAY_URI}/api/messages`).then(result => {
      const data = result.data;
      console.log(data);
      setMessages(data);
    })
    .catch(err => {
      console.error(`Error when getting messages, ${err}`);
    });
  }, []);*/

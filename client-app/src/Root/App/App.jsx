import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [ticker, setTicker] = useState("");
  const [interval, setInterval] = useState("");
  const [timePeriod, setTimePeriod] = useState(0);

  const changeTicker = (e) => setTicker(e.target.value);
  const changeInterval = (e) => setInterval(e.target.value);
  const changeTimePeriod = (e) => setTimePeriod(parseInt(e.target.value));

  const handleStartInterval = () => {
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

  const handleSubmit = () => {
    console.log(ticker, interval, timePeriod);
    axios.post(`${process.env.REACT_APP_API_GATEWAY_URI}/api/pollEma`, {
      ticker: ticker,
      interval: interval,
      timePeriod: timePeriod
    }).then(result => {
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
        const data = result.data;;
        console.log(data);
        
        // without websockets you'll have to refresh the page 
        // to see 'messages' update with the new message
      })
      .catch(err => {
        console.error(`${err}`);
      });
  };

  return (
    <main>
      <div>
        <div>
          <label> Enter ticker </label>
          <input type="text" onChange={e => changeTicker(e)} />
        </div>
        <div>
          <label> Select an interval </label>
          <input type="text" onChange={e => changeInterval(e)} />
        </div>
        <div>
          <label> Select an time period </label>
          <input type="text" onChange={e => changeTimePeriod(e)} />
        </div>
        <button onClick={handleSubmit}> Submit </button>
      </div>

      <div>
        <button onClick={handleStartInterval}> Start interval </button>
        <button onClick={handleStopInterval}> Stop interval </button>
      </div>
    </main>
  );
};

export default App;

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

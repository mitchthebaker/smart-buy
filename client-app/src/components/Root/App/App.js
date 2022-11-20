import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [ticker, setTicker] = useState("");
  const [interval, setInterval] = useState("");

  const handleTickerChange = (e) => setTicker(e.target.value);
  const handleIntervalChange = (e) => setInterval(e.target.value);

  const handleSubmit = () => {
    axios.post(`${process.env.REACT_APP_API_GATEWAY_URI}/api/pollEma`, {
      ticker: ticker,
      interval: interval
    }).then(result => {
      // do something with the response sent from server
      const data = result.data;;
      console.log(data);
      
      // without websockets you'll have to refresh the page 
      // to see 'messages' update with the new message
    })
    .catch(err => {
      console.error(`Error when posting a message, ${err}`);
    });
  };

  return (
    <div className="App">
      <div>
        <div>
          <label> Enter ticker </label>
          <input type="text" onChange={e => handleTickerChange(e)} />
        </div>
        <div>
          <label> Select an interval </label>
          <input type="text" onChange={e => handleIntervalChange(e)} />
        </div>
        <button onClick={handleSubmit}> Submit </button>
      </div>
    </div>
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

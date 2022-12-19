import { useEffect } from 'react';
import { useState } from 'react';
import logo from './logo.png';

// sass 
import '../../../sass/components/_card.scss';

// components 
import Spinner from 'react-spinkit';
import Alerts from './Alerts';

const Card = ({ metadata }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <section className='card-wrapper'>
      { !loaded ? (
        <Spinner name='folding-cube' />
      ) : (
        <div className='card'>
          <div> <img className='logo' src={logo} alt='Logo' /> </div>
          <div className='description'>
            <p className='ticker'> Ticker: {metadata.ticker} </p>
            <p className='date'> {metadata.date} </p>
            <p className='interval'> Interval: {metadata.interval} </p>
            <p className='start-time'> Start time: {metadata.start_time} </p>
            <div className='start-values'>
              <p> Timeline start value of {metadata.ticker}: {metadata.start_price} </p>
              <p> Timeline start value of {metadata.ticker}: {metadata.end_price} </p>
            </div>
            <p className='bsp'> <span> {metadata.bsp}BSP </span> </p>
          </div>
          <Alerts 
            ticker={metadata.ticker}
            alerts={metadata.alerts}
          />
        </div>
      )}
    </section>
  );
};

export default Card;
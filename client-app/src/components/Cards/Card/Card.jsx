import '../../../sass/components/_card.scss';
import Spinner from 'react-spinkit';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from './logo.png';
/**
 * {
                ticker: metadata.ticker,
                interval: metadata.interval,
                date: metadata.date, 
                start_time: metadata.start_time,
                start_price: metadata.start_price,
                end_price: metadata.end_price,
                bsp: metadata.bsp,
                alerts: alerts
              }
 * 
 */

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
          </div>
          {metadata.alerts ? (
            metadata.alerts.map(({ alert_id, ema13, ema63 }) => (
              <div key={alert_id}>
                <span> {ema13} </span>
                <span> {ema63} </span>
              </div>
            ))
          ) : (
            <span> No alerts yet </span>
          )}
        </div>
      )}
    </section>
  );
};

export default Card;
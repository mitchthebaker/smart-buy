import { useEffect } from 'react';
import { useState } from 'react';
import logo from './logo.png';

// sass 
import '../../../sass/components/_card.scss';
import '../../../sass/base/_typography.scss';

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
            <h4 className='h4 ticker'> Ticker: <b> ${metadata.ticker} </b> </h4>
            <h4 className='h4 date'> {metadata.date} </h4>
            <h4 className='h4 interval'> Interval: <b> {metadata.interval} </b> </h4>
            <h5 className='h5 start-time'> Start time: {metadata.start_time} </h5>
            <div className='row-3'>
              <div className='start-values'>
                <h6 className='h6'> Timeline start value of {metadata.ticker}: <b> {metadata.start_price} </b> </h6>
                <h6 className='h6'> Timeline start value of {metadata.ticker}: <b> {metadata.end_price} </b> </h6>
              </div>
              <div className='bsp'>
                <h6 className='h6'> <b> {metadata.bsp}BSP </b> </h6>
              </div>
            </div>
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
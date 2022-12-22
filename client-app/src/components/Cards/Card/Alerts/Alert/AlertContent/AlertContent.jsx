import '../../../../../../sass/components/_alertcontent.scss';
import '../../../../../../sass/base/_typography.scss';

const AlertContent = ({ ticker, interval, alert }) => {
  return (
    <section className='alert-content'>
      {(alert.cross_time !== null) ? (
        <h4 className='h4 ticker-info'> <b> {ticker} has crossed! </b> </h4>
      ) : (
        <h4 className='h4 ticker-info'> <b> Price {(alert.current_price < alert.ema13) ? `below` : `above`} 13EMA </b> </h4>
      )}

      <h5 className='h5 current-time'> {alert.current_time} </h5>
      <div className='ema'>
        <h5 className='h5'> <b> 13EMA: {alert.ema13} </b> </h5> 
        <h5 className='h5'> <b> 63EMA: {alert.ema63} </b> </h5>
      </div>
      <h5 className='h5 current-price'> Current price: <b> {alert.current_price} </b> </h5>
      <h5 className='h5'> Rate of Change: <b> {alert.rate_of_change} BPS </b> per {interval} </h5>
    </section>
  );
};

export default AlertContent; 
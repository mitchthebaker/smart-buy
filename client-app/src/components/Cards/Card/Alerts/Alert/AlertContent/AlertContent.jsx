import '../../../../../../sass/components/_alertcontent.scss';
import '../../../../../../sass/base/_typography.scss';

const AlertContent = ({ ticker, alert }) => {
  return (
    <section className='alert-content'>
      {(alert.cross_time !== null) ? (
        <h4 className='h4 ticker-info'> <b> {ticker} has crossed! </b> </h4>
      ) : (
        <h4 className='h4 ticker-info'> <b> Price {(alert.current_price < alert.ema13) ? `below` : `above`} 13EMA </b> </h4>
      )}
       
      <h5 className='h5 current-time'> {alert.current_time} </h5>
      <h5 className='h5 ema13'> 13EMA: {alert.ema13} </h5> 
      <h5 className='h5 ema63'> 63EMA: {alert.ema63} </h5>
      <h5 className='h5'> Current price: {alert.current_price} </h5>
    </section>
  );
};

export default AlertContent; 
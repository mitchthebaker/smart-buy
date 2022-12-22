import '../../../../../../sass/components/_alertcontent.scss';
import '../../../../../../sass/base/_typography.scss';

const AlertContent = ({ ticker, interval, alert }) => {
  return (
    <section className='alert-content'>
      <div className='row1-col1'>
        {(alert.cross_time !== null) ? (
          <h4 className='h4'> <b> {ticker} has crossed! </b> </h4>
        ) : (
          <h4 className='h4'> <b> Price {(alert.current_price < alert.ema13) ? `below` : `above`} 13EMA </b> </h4>
        )}
      </div>
      <div className='row2-col1'>
        { (alert.cross_time !== null) ? (
          <h5 className='h5 time-of-cross'> Time of cross: <b> { alert.cross_time } </b> </h5>
        ) : (
          <h5 className='h5 trend'> Current in a { alert.trend } trend </h5>
        )}
        <div className='ema'>
          <h5 className='h5'> <b> 13EMA: {alert.ema13} </b> </h5> 
          <h5 className='h5'> <b> 63EMA: {alert.ema63} </b> </h5>
        </div>
      </div>
      

      <h5 className='h5 current-time'> {alert.current_time} </h5>
      <h6 className='h6 current-price'> Current price: <br></br> <b> {alert.current_price} </b> </h6>
      <h5 className='h5 rate-of-change'> Rate of Change: <b> {alert.rate_of_change} BPS </b> per {interval} </h5>
      <h5 className='h5 estimated-cross'> Estimated cross to {alert.trend} trend: <b> {alert.cross_eta} </b> </h5>
    </section>
  );
};

export default AlertContent; 
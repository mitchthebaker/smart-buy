import '../../../../../../sass/components/_alertcontent.scss';
import '../../../../../../sass/base/_typography.scss';

// utils
import { applyEmaDiff } from './utils/applyEmaDiff';

const ContentHeader = ({ ticker, alert }) => {
  const { current_price, ema13, bps, cross_time } = alert;

  if(alert.bps !== null) {
    return <h4 className='h4'> { ticker } is within { bps }bps </h4>
  }

  if(cross_time !== null) {
    return <h4 className='h4'> <b> {ticker} has crossed! </b> </h4>
  }

  return (
    <h4 className='h4'> <b> Price {(current_price < ema13) ? `below` : `above`} 13EMA </b> </h4>
  );
}

const ContentRow = ({ row, alert, interval }) => {
  switch(row) {
    case 3: 
      /**
       * We only use rate of change up to when a cross takes place. 
       * Therefore, if rate of change is set to null the display the current price in its place. 
       */
      if(alert.rate_of_change !== null)
        return <h5 className='h5 rate-of-change'> Rate of Change: <b> {alert.rate_of_change} BPS </b> per {interval} </h5>;
      
      if(alert.ema_difference !== null)
        return <h4 className='h4 current-price'> <b> Current price: {alert.current_price} </b> </h4>;

      return;
    case 4:
      /**
       * Again, we only used the estimated cross up to when a cross takes place.
       * Therefore, remove the trend/cross_eta values after a cross and replace them with the EMA difference.
       */
      if(alert.cross_eta !== null) 
        return <h5 className='h5 estimated-cross'> Estimated cross to {alert.trend} trend: <b> {alert.cross_eta} </b> </h5>;
      
      if(alert.ema_difference !== null)
        return <h5 className='h5 ema-difference'> <b> EMA difference: { alert.ema_difference } (ideally 10+) </b> </h5>;
      
      return;
    default:
      return;
  }
};

const AlertContent = ({ ticker, interval, alert }) => {
  return (
    <section className={`alert-content ${applyEmaDiff(alert.ema_difference)}`}>
      <div className='row1--col1'>
        <ContentHeader 
          ticker={ticker}
          alert={alert}
        />
      </div>
      <div className='row2--col1'>
        { alert.cross_time !== null && <h5 className='h5 time-of-cross'> Time of cross: <b> { alert.cross_time } </b> </h5> }
        <div className='ema'>
          <h5 className={(alert.ema_difference !== null) ? 'h4' : 'h5'}> <b> 13EMA: {alert.ema13} </b> </h5> 
          <h5 className='h5'> <b> 63EMA: {alert.ema63} </b> </h5>
        </div>
      </div>
      <div className='row1-2--col2'>
        <h5 className='h5 current-time'> {alert.current_time} </h5>
        {/**
         * Before a cross takes place display the current price below the current time.
         * If rate of change is set to null, then we don't display the current price.
         * */}
        { alert.rate_of_change !== null && <h6 className='h6 current-price'> Current price: <br></br> <b> {alert.current_price} </b> </h6> }
      </div>
      <div className='row3--col1'>
          <ContentRow 
            row={3}
            interval={interval}
            alert={alert}
          />
      </div>
      <div className='row4--col1'>
        <ContentRow 
          row={4}
          alert={alert}
        />
      </div>
    </section>
  );
};

export default AlertContent; 
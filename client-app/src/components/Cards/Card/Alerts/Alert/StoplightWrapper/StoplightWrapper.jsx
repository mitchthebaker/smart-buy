import '../../../../../../sass/components/_stoplight.scss';
import '../../../../../../sass/base/_typography.scss';
import { applyBold } from './utils/applyBold';

const Light = ({ cls }) => {
  return <div className={cls}></div>
};   

const Stoplight = ({ alert }) => {
  if(alert.cross) {
    if(alert.ema_difference === null) {
      return (
        <div className='stoplight'>
          <Light cls={'green--light'} />
          <Light cls={'yellow--light'} />
          <Light cls={'red--light'} />
        </div>
      );
    }
    else if(alert.ema_difference <= 5) {
      return (
        <div className='stoplight'>
          <Light cls={'green--light'} />
          <Light cls={'yellow--light'} />
          <Light cls={'red--light--activated'} />
        </div>
      );
    }
    else if(alert.ema_difference > 5 && alert.ema_difference <= 7.5) {
      return (
        <div className='stoplight'>
          <Light cls={'green--light'} />
          <Light cls={'yellow--light--activated'} />
          <Light cls={'red--light'} />
        </div>
      );
    }
    else {
      return (
        <div className='stoplight'>
          <Light cls={'green--light--activated'} />
          <Light cls={'yellow--light'} />
          <Light cls={'red--light'} />
        </div>
      );
    }
  }
  else {
    if(alert.rate_of_change === null) {
      return (
        <div className='stoplight'>
          <Light cls={'green--light'} />
          <Light cls={'yellow--light'} />
          <Light cls={'red--light'} />
        </div>
      );
    }
    else if(alert.rate_of_change <= 0.90) {
      return (
        <div className='stoplight'>
          <Light cls={'green--light'} />
          <Light cls={'yellow--light'} />
          <Light cls={'red--light--activated'} />
        </div>
      );
    }
    else if(alert.rate_of_change > 0.90 && alert.rate_of_change <= 1.24) {
      return (
        <div className='stoplight'>
          <Light cls={'green--light'} />
          <Light cls={'yellow--light--activated'} />
          <Light cls={'red--light'} />
        </div>
      );
    }
    else {
      return (
        <div className='stoplight'>
          <Light cls={'green--light--activated'} />
          <Light cls={'yellow--light'} />
          <Light cls={'red--light'} />
        </div>
      );
    }
  }
};

const StoplightWrapper = ({ alert }) => {
  return (
    <section className='stoplight-wrapper'>
      <Stoplight 
        alert={alert}
      />
      <div className='stoplight-text'>
        {alert.stoplight_message && (
          <h5 className='h5'> {alert.stoplight_message} </h5>
        )}
      </div>
    </section>
  );
};

export default StoplightWrapper;
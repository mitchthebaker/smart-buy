import '../../../../../sass/components/_alert.scss';
import '../../../../../sass/base/_typography.scss';

// components
import AlertContent from './AlertContent';
import Stoplight from '../Stoplight';

const Alert = ({ idx, ticker, alert }) => {
  console.log(alert);
  return (
    <section className='alert'>
      {(alert.cross_time !== null) ? (
        <div className='cross-separator-wrapper'>
          <div className='cross-separator'> </div>
        </div>
      ) : (
        <>
          {idx !== 0 && 
            <div className='alert-separator-wrapper'></div>
          }
        </>
      )}
      
      <AlertContent ticker={ticker} alert={alert} />
      <Stoplight alert={alert} />
    </section>
  );
};

export default Alert;
import '../../../../../sass/components/_stoplight.scss';
import '../../../../../sass/base/_typography.scss';

const Stoplight = ({ alert }) => {
  return (
    <div className='stoplight-wrapper'>
      <div className='stoplight'>
        <div className='green--light'></div>
        <div className='yellow--light'></div>
        <div className='red--light'></div>
      </div>
      <div className='stoplight-text'>
        {(alert.cross_time !== null) ? (
          <h5 className='h5'> { alert.stoplight_message } </h5>
        ) : (
          <h5 className='h5'> { alert.stoplight_message } </h5>
        )}
      </div>
    </div>
  );
};

export default Stoplight;
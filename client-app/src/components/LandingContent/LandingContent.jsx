// libraries
import { Link } from 'react-router-dom';

// sass 
import '../../sass/components/_landingcontent.scss';
import '../../sass/base/_typography.scss';

// images
import logo from './logo.png';

const landingMockData = {
  date: new Date().toDateString(),
  crosses: {
    active_cross: {
      text: 'Active cross',
      time: '9:50AM',
    },
    potential_cross: {
      text: 'Potential cross incoming',
      time: '10:50AM',
    },
    completed_cross: {
      text: 'Completed cross',
      time: '8:50AM'
    }
  }
};

const LandingContent = () => {
  return (
    <section className='landing__content'>
      <div> <img className='logo' src={logo} alt='Logo' /> </div>
      <div className='date'> 
        <h4 className='h4'> Today </h4>
        <h4 className='h4'> {landingMockData.date} </h4>
      </div>
      <div className='crosses'>
        <div className='cross active--cross'>
          <h4 className='h4'> <b> {landingMockData.crosses.active_cross.text} </b> </h4>
          <h4 className='h4'> <b> {landingMockData.crosses.active_cross.time} </b> </h4>
        </div>
        <div className='cross potential--cross'>
          <h4 className='h4'> <b> {landingMockData.crosses.potential_cross.text} </b> </h4>
          <h4 className='h4'> <b> {landingMockData.crosses.potential_cross.time} </b> </h4>
        </div>
        <div className='cross completed--cross'>
          <h4 className='h4'> <b> {landingMockData.crosses.completed_cross.text} </b> </h4>
          <h4 className='h4'> <b> {landingMockData.crosses.completed_cross.time} </b> </h4>
        </div>
      </div>
      <div className='yesterday__cross'>
        <Link to='/dashboard'> 
          <h4 className='h4'> <u> View yesterday's crosses </u> </h4>
        </Link>
      </div>
    </section>
  );
};

export default LandingContent;
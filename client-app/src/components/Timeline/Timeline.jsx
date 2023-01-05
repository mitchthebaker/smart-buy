// libraries 
import { Link } from 'react-router-dom';

import Cards from '../Cards';
//import { useGetTimelineByIdQuery } from '../../store/services/timelineApi';
import { mockTimeline } from './mockTimeline';

// sass 
import '../../sass/components/_timeline.scss';
import '../../sass/base/_typography.scss';

const Timeline = () => {
  //const { data, err } = useGetTimelineByIdQuery('b2e1b143-c4d2-45b4-9d54-3ec09cc0f8c8');

  return (
    <section className='timeline'>
      <Link to='/' className='back__to__homepage'> 
        <h4 className='h4'> <b> Back to homepage </b> </h4> 
      </Link>
      {mockTimeline ? (
        <Cards 
          metadata={{
            ticker: mockTimeline.ticker,
            interval: mockTimeline.interval,
            date: mockTimeline.date,
            start_time: mockTimeline.start_time,
            start_price: mockTimeline.start_price,
            end_price: mockTimeline.end_price,
            bsp: mockTimeline.bsp,
            cards: mockTimeline.cards
          }}
        />
      ) : (
        <span> An error occurred when displaying cards </span>
      )}
    </section>
  );
};

export default Timeline;
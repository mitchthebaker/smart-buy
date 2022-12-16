import Cards from '../Cards';
import Spinner from 'react-spinkit';
import { useGetTimelineByIdQuery } from '../../store/services/timelineApi';
import { useEffect } from 'react';
import { useState } from 'react';
//import { convertToDate, convertToTime } from '../../helpers';
import { mockTimeline } from './mockTimeline';

// sass 
import '../../sass/components/_timeline.scss';

const Timeline = () => {
  const [loaded, setLoaded] = useState(false);
  const { data, err } = useGetTimelineByIdQuery('b2e1b143-c4d2-45b4-9d54-3ec09cc0f8c8');

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <section className='timeline'>
      { !loaded ? (
          <Spinner name='folding-cube' />
        ) : (
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
        )}
      { err && <span> An error occurred </span> }
    </section>
  );
};

export default Timeline;
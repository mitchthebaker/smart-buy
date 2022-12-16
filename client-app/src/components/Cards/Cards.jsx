//import { useSelector, useDispatch } from 'react-redux';
//import selectCards from '../../store/cardsSlice';
import Card from './Card';

// sass 
import '../../sass/components/_cards.scss';

const Cards = ({ metadata }) => {
  //const cards = useSelector(selectCards);
  const {
    ticker,
    interval,
    date,
    start_time,
    start_price,
    end_price,
    bsp,
    cards
  } = metadata;

  return (
    <section className='cards'>
      {cards.map(({ card_id, alerts}) => (
        <Card 
          key={card_id} 
          ticker={ticker}
          interval={interval}
          alerts={alerts}
        />
      ))}
    </section>
  );
};

export default Cards;
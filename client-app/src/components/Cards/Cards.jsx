//import { useSelector, useDispatch } from 'react-redux';
//import selectCards from '../../store/cardsSlice';
import Card from './Card';

const Cards = ({ cards, ticker, interval }) => {
  //const cards = useSelector(selectCards);

  return (
    <section>
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
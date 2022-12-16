import Card from './Card';

// sass 
import '../../sass/components/_cards.scss';

const Cards = ({ metadata }) => {
  return (
    <section className='cards'>
      {metadata.cards.map(({ card_id, alerts}) => (
        <Card 
          key={card_id} 
          metadata={{
            ticker: metadata.ticker,
            interval: metadata.interval,
            date: metadata.date, 
            start_time: metadata.start_time,
            start_price: metadata.start_price,
            end_price: metadata.end_price,
            bsp: metadata.bsp,
            alerts: alerts
          }}
        />
      ))}
    </section>
  );
};

export default Cards;
import './Bar.css';
import BarComp from '../BarComp/BarComp';
import earth from '../imgs/earth.png';
import exchange from '../imgs/exchange.png';
import headset from '../imgs/headset.png';
import giftbox from '../imgs/giftbox.png';

export default function Bar() {
  return (
    <div className="Bar">
      <BarComp
        img={earth}
        span1="FREE SHIPPING"
        span2="Free shipping on all UK orders"
      />
      <BarComp
        img={exchange}
        span1="FREE EXCHANGE"
        span2="30 days return on all items"
      />
      <BarComp
        img={headset}
        span1="PREMIUM SUPPORT"
        span2="We support online 24 hours a day"
      />
      <BarComp
        img={giftbox}
        span1="BLACK FRIDAY"
        span2="Shocking discount on every friday"
      />
    </div>
  );
}

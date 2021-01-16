import './SliderFill.css';
import { ImLocation2 } from 'react-icons/im';

export default function SliderFill(props) {
  const { profile, paragraph, location } = props;
  return (
    <div className="SliderFill">
      <img src={profile} className="profile"></img>
      <p>{paragraph}</p>
      <ImLocation2 size={32} />
      <span>{location}</span>
    </div>
  );
}

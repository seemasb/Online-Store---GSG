import './Coloring.css';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';
export default function Coloring(props) {
  const { Coloring } = props;
  return (
    <div className="Coloring">
      <div>
        <RiCheckboxBlankCircleFill
          size={12}
          color={Coloring}
          className="colorBall"
        />
        <span>{Coloring}</span>
      </div>
      <hr className="hrLine"></hr>
    </div>
  );
}

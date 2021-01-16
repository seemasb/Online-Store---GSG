import './BarComp.css';

export default function BarComp(props) {
  const { img, span1, span2 } = props;
  return (
    <div className="BarComp">
      <img src={img} alt="icon"></img>
      <div>
        <span id="sp1">{span1}</span>
        <span id="sp2">{span2}</span>
      </div>
    </div>
  );
}

import './Category.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
export default function Category(props) {
  const { category } = props;
  return (
    <div className="Category">
      <div className="animatedCategory">
        <MdKeyboardArrowRight size={18} className="arrowIcon" />
        <span>{category}</span>
      </div>
      <hr className="hrLine"></hr>
    </div>
  );
}

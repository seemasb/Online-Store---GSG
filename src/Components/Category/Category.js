import './Category.css';
import { MdKeyboardArrowRight } from 'react-icons/md';
export default function Category(props) {
  const { category, setSeacrhCategory } = props;
  const setCat = () => {
    setSeacrhCategory(category);
    console.log('at category ' + category);
  };
  return (
    <div className="Category">
      <div className="animatedCategory" onClick={setCat}>
        <MdKeyboardArrowRight size={18} className="arrowIcon" />
        <span>{category}</span>
      </div>
      <hr className="hrLine"></hr>
    </div>
  );
}

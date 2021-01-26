import './SearchBar.css';
import 'antd/dist/antd.css';
import { Input, Slider } from 'antd';
import Category from '../Category/Category';
import Coloring from '../Coloring/Coloring';

const { Search } = Input;
const onSearch = (value) => console.log(value);

export default function SearchBar(props) {
  const { setSeacrhCategory } = props;
  return (
    <div className="SearchBar">
      <Search
        placeholder="Search here.."
        onSearch={onSearch}
        enterButton
        size="large"
        className="search"
      />
      <div className="searchTitle-div">
        <span className="searchTitle">Category</span>
        <div className="catDiv">
          <Category category="Chairs" setSeacrhCategory={setSeacrhCategory} />
          <Category category="Tables" setSeacrhCategory={setSeacrhCategory} />
          <Category category="Sofas" setSeacrhCategory={setSeacrhCategory} />
          <Category
            category="Lights & Lamps"
            setSeacrhCategory={setSeacrhCategory}
          />
          <Category
            category="Decorations"
            setSeacrhCategory={setSeacrhCategory}
          />
          <Category category="Others" setSeacrhCategory={setSeacrhCategory} />
        </div>
      </div>
      <div className="searchTitle-div">
        <span className="searchTitle">Pricing</span>
        <div className="catDiv">
          <Slider
            range
            defaultValue={[100, 600]}
            reverse="true"
            max="1000"
            className="sliderColor"
            style={{ color: 'red' }}
          />
        </div>
      </div>
      <div className="searchTitle-div">
        <span className="searchTitle">Color</span>
        <div className="catDiv">
          <Coloring Coloring="Blue" />
          <Coloring Coloring="Gray" />
          <Coloring Coloring="Brown" />
          <Coloring Coloring="Green" />
          <Coloring Coloring="Red" />
          <Coloring Coloring="Orange" />
          <Coloring Coloring="Black" />
        </div>
      </div>
      <div className="searchTitle-div">
        <span className="searchTitle">Popular tags</span>
        <div className="catDiv">
          <button>Chairs</button>
          <button>Tables</button>
          <button>Sofas</button>
          <button>Lights</button>
          <button>Lamps</button>
          <button>Curtains</button>
          <button>Cabinets</button>
        </div>
      </div>
    </div>
  );
}

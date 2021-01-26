import './Shop.css';
import PagesHero from '../../Components/PagesHero/PagesHero';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Bar from '../../Components/Bar/Bar';
import Footer from '../../Components/Footer/Footer';
import ShopCardCont from '../../Components/ShopCardCont/ShopCardCont';
import { useState } from 'react';
// const contextType = NameContext;
export default function Shop(props) {
  const [searchCategory, setSeacrhCategory] = useState('all');
  const { setProductName } = props;
  return (
    <div className="Shop">
      {console.log(searchCategory + ' at shop page')}
      <PagesHero page="Shop" />
      <div className="shopLayout">
        <SearchBar setSeacrhCategory={setSeacrhCategory} />
        <ShopCardCont
          setProductName={setProductName}
          searchCategory={searchCategory}
        />
      </div>
      <Bar />
      <Footer />
    </div>
  );
}

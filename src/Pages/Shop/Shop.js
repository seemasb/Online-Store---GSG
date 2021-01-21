import './Shop.css';
import PagesHero from '../../Components/PagesHero/PagesHero';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Bar from '../../Components/Bar/Bar';
import Footer from '../../Components/Footer/Footer';
import ShopCardCont from '../../Components/ShopCardCont/ShopCardCont';
// const contextType = NameContext;
export default function Shop(props) {
  const { setProductName } = props;
  return (
    <div className="Shop">
      <PagesHero page="Shop" />
      <div className="shopLayout">
        <SearchBar />
        <ShopCardCont setProductName={setProductName} />
      </div>
      <Bar />
      <Footer />
    </div>
  );
}
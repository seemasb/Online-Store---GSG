import './SingleProduct.css';
import PagesHero from '../../Components/PagesHero/PagesHero';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Bar from '../../Components/Bar/Bar';
import Footer from '../../Components/Footer/Footer';
import ShopCardCont from '../../Components/ShopCardCont/ShopCardCont';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

export default function SingleProduct({ ProductName }) {
  return (
    <div className="SingleProduct">
      <PagesHero page="Single Product" />
      <ProductDetails ProductName={ProductName} />

      <Bar />
      <Footer />
    </div>
  );
}

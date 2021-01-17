import './Shop.css';
import PagesHero from '../../Components/PagesHero/PagesHero';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Bar from '../../Components/Bar/Bar';
import Footer from '../../Components/Footer/Footer';

export default function Shop() {
  return (
    <div className="Shop">
      <PagesHero page="Shop" />
      <SearchBar />
      <Bar />
      <Footer />
    </div>
  );
}

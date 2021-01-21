import './Home.css';
import Hero from '../../Components/HeroSection/Hero';
import SaleCards from '../../Components/SaleCards/SaleCards';
// import HomeCardsCont from '../../Components/HomeCardsCont/HomeCardsCont';
import HomeCardContTest from '../../Components/HomeCardContTest/HomeCardContTest';
import Bar from '../../Components/Bar/Bar';
import Footer from '../../Components/Footer/Footer';
import Slider from '../../Components/Slider/Slider';
export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <SaleCards />
      <HomeCardContTest />
      <Slider />
      <Bar />
      <Footer />
    </div>
  );
}

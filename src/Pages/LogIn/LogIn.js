import './LogIn.css';
import PagesHero from '../../Components/PagesHero/PagesHero';
import LoginForm from '../../Components/LoginForm/LoginForm';
import Bar from '../../Components/Bar/Bar';
import Footer from '../../Components/Footer/Footer';

export default function LogIn() {
  return (
    <div className="LogIn">
      <PagesHero />
      <div className="customizeLogin">
        <LoginForm />
      </div>
      <Bar />
      <Footer />
    </div>
  );
}

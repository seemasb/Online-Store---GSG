import './Register.css';
import PagesHero from '../../Components/PagesHero/PagesHero';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import Bar from '../../Components/Bar/Bar';
import Footer from '../../Components/Footer/Footer';

export default function Register() {
  return (
    <div className="Register">
      <PagesHero page="Register" />
      <RegistrationForm />
      <Bar />
      <Footer />
    </div>
  );
}

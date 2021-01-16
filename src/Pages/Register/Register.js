import './Register.css';
import PagesHero from '../../Components/PagesHero/PagesHero';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';

export default function Register() {
  return (
    <div className="Register">
      <PagesHero />
      <RegistrationForm />
    </div>
  );
}

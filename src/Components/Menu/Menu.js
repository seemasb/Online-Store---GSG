import { NavLink } from 'react-router-dom';
import './Menu.css';
import { FiShoppingCart } from 'react-icons/fi';
import { FiSettings } from 'react-icons/fi';
import { GoSearch } from 'react-icons/go';
import { GiSofa } from 'react-icons/gi';

export default function Menu() {
  return (
    <div className="Menu">
      <div className="Logo">
        <GiSofa size={37} color="#00917c" className="sofa" />
        <span>Furnish</span>
      </div>
      <div className="Nav">
        <ul>
          <li>
            <NavLink
              to="/Home"
              className="naving"
              id="home"
              activeStyle={{
                color: '#00917c',
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Shop"
              className="naving"
              id="Shop"
              activeStyle={{
                color: '#00917c',
              }}
            >
              Shop
            </NavLink>
          </li>

          <li>
            <NavLink
              exact
              to="/LogIn"
              className="naving"
              id="LogIn"
              activeStyle={{
                color: '#00917c',
              }}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Register"
              className="naving"
              id="Register"
              activeStyle={{
                color: '#00917c',
              }}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Sofa"
              className="naving"
              id="Sofa"
              activeStyle={{
                color: '#00917c',
              }}
            >
              Sofa
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/Contact"
              className="naving"
              id="Contact"
              activeStyle={{
                color: '#00917c',
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="Icons">
        <GoSearch color="#525251" size={20} />
        <FiSettings color="#525251" size={20} />
        <FiShoppingCart color="#525251" size={20} />
      </div>
    </div>
  );
}

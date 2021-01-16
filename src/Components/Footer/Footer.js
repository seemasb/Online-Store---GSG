import './Footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { ImInstagram } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialGooglePlus } from 'react-icons/ti';

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer1">
        <div>
          <button>
            <FaFacebookF size={17} />
          </button>
          <button>
            <TiSocialGooglePlus size={17} />
          </button>
          <button>
            <ImInstagram size={17} />
          </button>
          <button>
            <AiOutlineTwitter size={17} />
          </button>
        </div>
        <div className="spans">
          <span>home</span>
          <span>shop</span>
          <span>register</span>
          <span>Sales</span>
          <span>Contact</span>
        </div>
        <div className="spans2">
          <span>home</span>
          <div className="line"></div>
          <span>shop</span>
          <div className="line"></div>
          <span>register</span>
          <div className="line"></div>
          <span>Contact</span>
        </div>
      </div>
      <div className="footer2">
        <span id="quote">If you can't stop thinking about it ... buy it</span>
        <br></br>
        <br></br>
        <span id="rights">Copyright © 2021, All Right Seema Nedal Sbouh</span>
      </div>
    </div>
  );
}

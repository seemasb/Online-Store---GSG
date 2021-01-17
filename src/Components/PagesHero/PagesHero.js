import './PagesHero.css';
import cha from '../imgs/cha.png';
import { Breadcrumb } from 'antd';

export default function PagesHero(props) {
  const { page } = props;
  return (
    <div className="PagesHero">
      <img src={cha}></img>
      <div className="bread">
        <span className="pageName">{page}</span>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item className="f">Home</Breadcrumb.Item>
            <Breadcrumb.Item className="colorO f">{page}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}

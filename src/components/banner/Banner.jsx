import "./Banner.css";
import bannerImg from "../../assets/img/BannerNew.png";
import {Link} from "react-router-dom"
const Banner = () => {
  return (
    <div className="banner-container">
      <Link to='/'>
        <img className="banner" src={bannerImg} alt="Banner Principal" />
      </Link>

    </div>
  );
}

export default Banner;
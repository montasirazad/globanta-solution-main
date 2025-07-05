import { Link } from "react-router-dom";
import globe_img from "../../assets/globe.jpeg";
import "./StudyAbroad.css";
const StudyAbroad = () => {
  return (
    <div id="study-abroad">
      <h1>country we work with</h1>

      <div className="study-abroad-main">
        <div className="country-card">
          <img src={globe_img} alt="" />
          <Link to={"/globanta/country/details/asia"}>Asia</Link>
        </div>
        <div className="country-card">
          <img src={globe_img} alt="" />
          <Link to={"/globanta/country/details/europe"}>Europe</Link>
        </div>
        <div className="country-card">
          <img src={globe_img} alt="" />
          <Link to={"/globanta/country/details/north-america"}>
            North America
          </Link>
        </div>
        <div className="country-card">
          <img src={globe_img} alt="" />
          <Link to={"/globanta/country/details/oshenia"}>Oshenia</Link>
        </div>
      </div>
    </div>
  );
};

export default StudyAbroad;

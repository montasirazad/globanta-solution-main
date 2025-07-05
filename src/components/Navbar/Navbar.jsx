// import barIcon from "../../assets/bar-menu.png";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import globantaLogo from "../../assets/globanta-logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-info-div">
        <div>
          <p>
            <i
              className="fa fa-location-arrow"
              style={{ color: "white", marginRight: "10px" }}
            ></i>
            Bangladesh | Malaysia
          </p>
        </div>
        <div>
          <p>
            <i className="fa fa-phone"></i> +8801533-517455
          </p>
        </div>
        <div>
          <p>
            <i className="fa fa-envelope" style={{ marginRight: "10px" }}></i>{" "}
            info@globantasolutionltd.com
          </p>
        </div>
        <div >
          <Link
            to={"https://www.facebook.com/globantasolution"}
            target="_blank"
          >
            <i
              className="fa fa-facebook-square"
              style={{ fontSize: "25px", color: "white",marginRight:'10px' }}
            ></i>
          </Link>
          <Link
            to={
              "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fglobantasolutionltd%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTlNSOHZNOTJtMHVTT09sSQEeIIDTh0L-fuY8E4BvHqzBebj33A01UiawztkJItAQjMQdIwb9wiNNgN6Ux_0_aem_RyZ0ZFcyY5CEjvAI9N-suQ&h=AT3-MUaSsy1Al_dbRDEwNpaLzrLAfB_C2qJvObIsOMLaYthSYoOkkJbc5ELvCZjqJZJvcMhA2Trn-wVwy-0rAK-_lwEsv7F6fnIE6_ipyqZHRynumgiPJpBswkMhNr9y8onb"
            }
            target="_blank"
          >
            <i
              className="fa fa-instagram"
              style={{ fontSize: "25px", color: "white" }}
            ></i>{" "}
          </Link>
        </div>
      </div>
      <div className="navbar-main">
        <div className="logo-div">
          <img src={globantaLogo} alt="" />
        </div>
        <div className="link-div">
          <ul>
            <li>
              <NavHashLink to={"/#study-abroad"} smooth>
                Study Abroad
              </NavHashLink>
            </li>
            <li>
              <NavHashLink to={"/#service"} smooth>
                Services
              </NavHashLink>
            </li>
            {/* <li>
            <a href="#">link 3</a>
          </li> */}
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import globantaLogo from "../../assets/globanta-logo.jpg";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="footer-about-us">
          <div className="logo-div">
            <img src={globantaLogo} alt="" />
          </div>
          <p>
            A trusted name in educational consultancy, we provide expert
            guidance and strategic support to help students excel on the global
            stage. With a commitment to excellence, we turn aspirations into
            achievements. Where Aspiration Meets Preparation.
          </p>{" "}
          <br />
          <p>
            <i
              className="fa fa-location-arrow"
              style={{ color: "white", marginRight: "10px" }}
            ></i>
            House-57, Road-8, Block-D
          </p>
          <p>Niketon, Gulshan-1</p>
          <p>Dhaka, Bangladesh</p>
          <p>
            <i className="fa fa-phone" style={{ marginRight: "10px" }}></i>{" "}
            +8801533-517455
          </p>{" "}
          <i className="fa fa-envelope" style={{ marginRight: "10px" }}></i>{" "}
          info@globantasolutionltd.com
        </div>
        <div className="footer-details">
          <ul>
            <li>About us </li>
            <li> services</li>
            <li>study abroad</li>
          </ul>
        </div>
        <div className="footer-social">
          <Link
            to={"https://www.facebook.com/globantasolution"}
            target="_blank"
          >
            <i
              className="fa fa-facebook-square"
              style={{ fontSize: "36px", color: "white" }}
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
              style={{ fontSize: "36px", color: "white" }}
            ></i>{" "}
          </Link>
        </div>
      </div>

      <div style={{ color: "white", textAlign: "center", padding: "15px" }}>
        <p>&copy; 2025 Globanta Solution Limited All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;

{
  /* <p>&copy; 2025 Globanta Solution Limited All rights reserved.</p> */
}

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slideImg4 from "../assets/Slide-04.png";
import slideImg5 from "../assets/Slide-05.png";
import slideImg7 from "../assets/Slide-07.png";
import "./CountrySlider.css";
const CountrySlider = () => {
  return (
    <div>
      <Carousel showThumbs={false} interval={2000} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={slideImg4} />
        </div>
        <div>
          <img src={slideImg5} />
        </div>
        <div>
          <img src={slideImg7} />
        </div>
      </Carousel>
    </div>
  );
};

export default CountrySlider;

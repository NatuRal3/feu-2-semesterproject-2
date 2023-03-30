import Carousel from "react-bootstrap/Carousel";

import imgCarousel1 from "../assets/carousel/bust-aurelius-web.jpg";
import imgCarousel2 from "../assets/carousel/bust-aurelius-web.jpg";
import imgCarousel3 from "../assets/carousel/bust-aurelius-web.jpg";

function BoardSlider() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={imgCarousel1} alt="First slide" />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgCarousel2} alt="Secound slide" />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgCarousel3} alt="Third slide" />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BoardSlider;

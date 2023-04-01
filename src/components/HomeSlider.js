import React from "react";
import Carousel from "react-bootstrap/Carousel";

import imgCarousel1 from "../assets/carousel/carousel-1.jpg";
import imgCarousel2 from "../assets/carousel/carousel-2.jpg";
import imgCarousel3 from "../assets/carousel/carousel-3.jpg";

function HomeSlider() {
  return (
    <Carousel controls={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={imgCarousel1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imgCarousel2} alt="Secound slide" />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block w-100" src={imgCarousel3} alt="Third slide" />
      </Carousel.Item> */}
      <Carousel.Item>
        <div style={{ backgroundImage: "url(../assets/carousel/carousel-3.jpg)" }}>TEST</div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;

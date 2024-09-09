import Carousel from "react-bootstrap/Carousel";

import HeroTextCard from "../heroTextCard/HeroTextCard";

import "./heroSlider.css";

function HeroSlider({ items }) {
  return (
    <section className="hero-slider">
      <Carousel>
        {items.map((element, index) => {
          return (
            <Carousel.Item key={index}>
              <img src={element.srcImg} className="w-100 object-fit-cover" />
              <Carousel.Caption>
                <HeroTextCard data={element.cardData} />
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default HeroSlider;

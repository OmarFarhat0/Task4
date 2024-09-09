import Carousel from "react-bootstrap/Carousel";
import { FaQuoteLeft } from "react-icons/fa6";
import { Col, Row } from "react-bootstrap";

import "./testimonialsCards.css";

function TestimonialsCards({ data }) {
  let slidersData = [];
  for (let i = 0; i < data.length; i += 3) {
    let aid = [];
    for (let j = i; j < i + 3 && j < data.length; j++) {
      aid.push(
        <Col key={j} sm={6} md={4} className="px-lg-4">
          <div className="bg-light text-start rounded p-4 pb-5">
            <p>
              <span className="me-2">
                <FaQuoteLeft className="svg-left flex-shrink-0 clr-primary-color fs-5 opacity-50" />
              </span>
              <span className="text-secondary-emphasis fst-italic">
                {data[j].text}
              </span>
              <span className="ms-2">
                <FaQuoteLeft className="svg-left flex-shrink-0 clr-primary-color fs-5 opacity-50" />
              </span>
            </p>
          </div>
          <div className="writer text-start position-relative">
            <img src={data[j].srcImg} className="w-25 rounded-circle  mb-3 " />
            <h3 className="text-light-emphasis fs-5">{data[j].writer}</h3>
            <p className="text-body-secondary mb-0">{data[j].job}</p>
          </div>
        </Col>
      );
    }
    slidersData.push(aid);
  }

  return (
    <div className="testimonials-cards">
      <Carousel fade interval={null}>
        {slidersData.map((element, index) => {
          return (
            <Carousel.Item key={index}>
              <Row>{element}</Row>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default TestimonialsCards;

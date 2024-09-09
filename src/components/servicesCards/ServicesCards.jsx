import { Col, Row } from "react-bootstrap";

import "./servicesCards.css";

export default function ServicesCards({ data }) {
  return (
    <div className="services-cards">
      <Row>
        {data.map((element, index) => {
          return (
            <Col
              key={index}
              sm={6}
              lg={4}
              className="text-center text-light-emphasis mb-4 mb-lg-5"
            >
              <div className="px-3">
                <div className="shadow w-fit-content mx-auto rounded-circle p-4 mb-3">
                  {element.icon}
                </div>
                <h3 className="text-light-emphasis fs-4 ">{element.title}</h3>
                <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
                <p style={{ fontSize: "15px" }}>{element.text}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

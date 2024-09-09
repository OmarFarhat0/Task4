import "./featureCards.css";
import { Col, Container, Row } from "react-bootstrap";

export default function FeatureCards({ items }) {
  return (
    <section className="feature-cards py-5">
      <Container>
        <Row className="">
          {items.map((element, index) => {
            return (
              <Col key={index} sm={6} md={4} lg={3}>
                <div className="shadow-lg p-3 p-lg-4">
                  {element.icon}
                  <h5 className="text-light-emphasis my-3">{element.title}</h5>
                  <p className="p-0">{element.text}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

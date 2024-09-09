import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";

import "./pricingCards.css";

function PricingCards({ data }) {
  const allFeatures = [
    "Aida dere",
    "Nec feugiat nisl",
    "Nulla at volutpat dola",
    "Pharetra massa",
    "Massa ultricies mi",
  ];
  return (
    <div className="pricing-cards">
      <Row>
        {data.map((element, indexElement) => {
          return (
            <Col
              key={indexElement}
              sm={6}
              md={4}
              lg={3}
              className="mb-4 mb-lg-0"
            >
              <Card className="text-center h-100 border-0 shadow">
                <Card.Header
                  className={`border-0 py-sm-3 ${
                    element?.bgHeadActive ? "bg-primary-color" : ""
                  }`}
                >
                  <h2
                    className={`fs-5 fw-normal  ${
                      element?.bgHeadActive
                        ? "text-white"
                        : "text-dark-emphasis"
                    } `}
                  >
                    {element.name}
                  </h2>
                </Card.Header>
                <Card.Body className="py-sm-4">
                  <Card.Title className="mb-4">
                    <h5 className="w-fit-content mx-auto">
                      <span className="text-secondary-emphasis position-relative text-light-emphasis">
                        $
                      </span>
                      <span className="fw-bold fs-2 text-light-emphasis">
                        {element.price}
                      </span>
                      <span className="duration text-body-tertiary fw-normal">
                        {`/ ${element.duration}`}
                      </span>
                    </h5>
                  </Card.Title>
                  <Card.Text>
                    {allFeatures.map((feature) => {
                      if (element.feautersSet.has(feature)) {
                        return <p key={indexElement}>{feature}</p>;
                      } else {
                        return (
                          <p
                            key={indexElement}
                            className="text-decoration-line-through text-body-tertiary"
                          >
                            {feature}
                          </p>
                        );
                      }
                    })}
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted border-0 py-sm-3">
                  <Button className="border-0 py-2 px-4 bg-primary-color">
                    Buy Now
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default PricingCards;

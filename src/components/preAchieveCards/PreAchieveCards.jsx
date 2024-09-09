import { Col, Container, Row } from "react-bootstrap";

import "./preAchieveCards.css";

export default function PreAchieveCards({ items }) {
  return (
    <div className="pre-achieve-cards">
      <Container>
        <Row>
          {items.map((element, index) => {
            return (
              <Col key={index} sm={6} md={4} lg={3}>
                <div className="shadow-lg d-flex align-items-center gap-3 p-3 p-lg-4">
                  {element.icon}
                  <div>
                    <h3 className="text-light-emphasis fs-1 fw-bold">
                      {element.value}
                    </h3>
                    <p>{element.what}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

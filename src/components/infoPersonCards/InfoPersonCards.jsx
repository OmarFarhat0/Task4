import { Col, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";

import "./infoPersonCards.css";

function InfoPersonCards({ data }) {
  return (
    <div className="info-person-cards">
      <Row>
        {data.map((elment, index) => {
          return (
            <Col key={index} xs={6} md={4} lg={3} className="mb-4">
              <Card key={index} className="border-0 shadow h-100">
                <Card.Img variant="top" src={elment.srcImg} />
                <Card.Body className="p-2 p-sm-3">
                  <Card.Title className="name text-light-emphasis ">
                    {elment.name}
                  </Card.Title>
                  <Card.Text className="jop text-body-secondary">
                    {elment.jop}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default InfoPersonCards;

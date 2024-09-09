import { Col, Container, Row } from "react-bootstrap";
import "./departmentsSection.css";
import { useState } from "react";

export default function DepartmentsSection({ introduce, categories, data }) {
  const [department, setDepartment] = useState("Cardiology");
  return (
    <div className="departments-section py-5" id="departments-section">
      <Container>
        <div className="text-center pb-4 pb-md-5">
          <h2 className="text-light-emphasis fw-bold ">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>

        <Row>
          <Col md={3} className="pb-4 pb-md-0">
            {categories.map((elment, index) => {
              return (
                <button
                  className={`d-block border-0 bg-white fw-semibold pb-3 w-100 text-start  ${
                    elment === department ? "clr-primary-color " : "border-end"
                  }`}
                  key={index}
                  onClick={() => setDepartment(elment)}
                >
                  {elment}
                </button>
              );
            })}
          </Col>

          {data.map((elment, index) => {
            console.log(elment.title === department);
            return elment.title === department ? (
              <Col key={index}>
                <Row>
                  <Col md={8} className="text-start">
                    <h2 className="text-light-emphasis fs-3 pb-2">
                      {elment.title}
                    </h2>
                    <p className="text-light-emphasis">{elment.text}</p>
                  </Col>
                  <Col md={4}>
                    <img src={elment.imgSrc} className="w-100" />
                  </Col>
                </Row>
              </Col>
            ) : null;
          })}
        </Row>
      </Container>
    </div>
  );
}

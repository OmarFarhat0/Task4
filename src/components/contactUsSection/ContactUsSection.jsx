import { Col, Container, Row } from "react-bootstrap";
import "./contactUsSection.css";
import ContactCard from "../ContactCard/ContactCard";
import FormDynamic from "../formDynamic/FormDynamic";

export default function ContactUsSection({
  introduce,
  map,
  allContactCardData,
  formDynamicData,
}) {
  return (
    <div className="contact-us-section py-5" id="contact-us-section">
      <Container>
        <div className="text-center pb-4 pb-md-5">
          <h2 className="text-light-emphasis fw-bold ">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>
      </Container>

      <div className="mb-5">{map}</div>

      <Container>
        <Row>
          <Col lg={6}>
            <Row>
              {allContactCardData.map((element, index) => {
                return (
                  <Col key={index} md={index ? 6 : 12} className="mb-3 mb-lg-4">
                    <ContactCard data={element} />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col lg={6}>
            <div className="bg-white p-4 shadow">
              <FormDynamic data={formDynamicData} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import { Container } from "react-bootstrap";

import ServicesCards from "../servicesCards/ServicesCards";

import "./servicesSection.css";

export default function ServicesSection({ introduce, servicesCardsData }) {
  return (
    <Container>
      <div className="service-section pt-md-5 pb-md-5" id="service-section">
        <div className="text-center pb-4 pb-md-5">
          <h2 className="text-light-emphasis fw-bold">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>

        <ServicesCards data={servicesCardsData} />
      </div>
    </Container>
  );
}

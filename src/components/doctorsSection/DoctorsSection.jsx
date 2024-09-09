import { Container } from "react-bootstrap";

import InfoPersonCards from "../infoPersonCards/InfoPersonCards";

import "./doctorsSection.css";

export default function DoctorsSection({ introduce, InfoPersonCardsData }) {
  return (
    <div className="doctors-section bg-light py-5" id="doctors-section">
      <Container>
        <div className="text-center pb-4 pb-md-5">
          <h2 className="text-light-emphasis fw-bold ">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>
        <InfoPersonCards data={InfoPersonCardsData} />
      </Container>
    </div>
  );
}

import { Container } from "react-bootstrap";

import "./testimonialsSection.css";
import TestimonialsCards from "../TestimonialsCards/TestimonialsCards";

export default function TestimonialsSection({
  introduce,
  testimonialsCardsData,
}) {
  return (
    <div className="testimonials-section py-5">
      <Container>
        <div className="text-center pb-4 pb-md-5">
          <h2 className="text-light-emphasis fw-bold ">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>
        <TestimonialsCards data={testimonialsCardsData} />
      </Container>
    </div>
  );
}

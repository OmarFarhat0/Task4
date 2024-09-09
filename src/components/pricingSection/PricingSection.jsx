import { Container } from "react-bootstrap";
import "./pricingSection.css";
import PricingCards from "../pricingCards/PricingCards";

export default function PricingSection({ introduce, pricingCardsData }) {
  return (
    <div className="pricing-section py-5">
      <Container>
        <div className="text-center pb-4 pb-md-5">
          <h2 className="text-light-emphasis fw-bold ">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>
        <PricingCards data={pricingCardsData} />
      </Container>
    </div>
  );
}

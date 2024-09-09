import { Container } from "react-bootstrap";
import "./questionsSection.css";
import QuestionsAccordion from "../questionsAccordion/QuestionsAccordion";

export default function QuestionsSection({
  introduce,
  questionsAccordionData,
}) {
  return (
    <div className="questions-section py-5 bg-light">
      <Container>
        <div className="text-center pb-4 pb-md-5">
          <h2 className="text-light-emphasis fw-bold ">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>
        <QuestionsAccordion data={questionsAccordionData} />
      </Container>
    </div>
  );
}

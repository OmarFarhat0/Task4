import Accordion from "react-bootstrap/Accordion";

import "./questionsAccordion.css";

function QuestionsAccordion({ data }) {
  return (
    <div className="questions-accordion">
      <Accordion alwaysOpen>
        {data.map((element, index) => {
          return (
            <Accordion.Item
              key={index}
              eventKey={index}
              className="mb-3 border"
            >
              <Accordion.Header className="text-light-emphasis">
                {element.question}
              </Accordion.Header>
              <Accordion.Body className="pt-0">{element.answer}</Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}

export default QuestionsAccordion;

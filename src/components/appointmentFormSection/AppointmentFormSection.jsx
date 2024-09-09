import { Container, Form } from "react-bootstrap";

import "./appointmentFormSection.css";

import FormDynamic from "../formDynamic/FormDynamic";

export default function AppointmentFormSection({ introduce, formDynamicData }) {
  return (
    <div
      className="appointment-form-section bg-light py-5"
      id="appointment-form-section"
    >
      <Container>
        <div className="text-center pb-md-5">
          <h2 className="text-light-emphasis fw-bold">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>

        <FormDynamic data={formDynamicData} />
      </Container>
    </div>
  );
}

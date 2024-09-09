import { Button, Container } from "react-bootstrap";

import "./appointmentBtnSection.css";

export default function AppointmentBtnSection({
  title,
  text,
  contentBtn,
  linkBtn,
}) {
  return (
    <section
      className="appointment-btn-section bg-primary-color text-center text-white py-5"
      id="appointment-section"
    >
      <Container className="w-75">
        <h2 className="fw-bold fs-3">{title}</h2>
        <p className="pb-1">{text}</p>
        <Button className="bg-transparent px-4 py-2 text-nowrap" href={linkBtn}>
          {contentBtn}
        </Button>
      </Container>
    </section>
  );
}

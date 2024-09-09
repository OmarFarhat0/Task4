import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { CiMobile2, CiTimer } from "react-icons/ci";

export default function ContactNavbar() {
  return (
    <div className="contact-navbar bg-primary-color">
      <Navbar className="p-0">
        <Container className="gap-4">
          <div className="d-flex align-items-center gap-1">
            <CiTimer className="fs-5 text-light" />
            <Navbar.Text className="text-light ">
              Monday - Saturday, 8AM to 10PM
            </Navbar.Text>
          </div>

          <div className="d-flex align-items-center gap-1">
            <CiMobile2 className="fs-5 text-light" />
            <Navbar.Text className="text-light ">
              Call us Now +1-5589-554488-55
            </Navbar.Text>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./mainNavbar.css";

export default function MainNavbar({ srcLogo, links, btnInfo }) {
  function nomralLinkRender(item, index) {
    return (
      <Nav.Link key={index} href={item.url}>
        {item.value}
      </Nav.Link>
    );
  }

  function dropLinkRender(item, index) {
    return (
      <NavDropdown key={index} title={item.value}>
        {item.url.map((element, index) => {
          return (
            <NavDropdown.Item key={index} href={element.url}>
              {element.value}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    );
  }

  return (
    <div className="main-navbar">
      <Navbar expand="lg" className="py-3 bg-white">
        <Container className="justify-content-start">
          <Navbar.Brand href="#" className="flex-grow-1">
            <img src={srcLogo} />
          </Navbar.Brand>

          <div className="d-flex order-lg-5 gap-1">
            <Button
              href={btnInfo.url}
              variant="primary"
              className="bg-primary-color border-0 rounded-1 px-3 ms-lg-4"
            >
              {btnInfo.content}
            </Button>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>

          <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
            <Nav className="my-2 my-lg-0 gap-3 fw-medium">
              {links.map((element, index) => {
                if (typeof element.url === "string") {
                  return nomralLinkRender(element, index);
                } else {
                  //Dropdown
                  return dropLinkRender(element, index);
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

import { Col, Container, Row } from "react-bootstrap";
import "./footer.css";

export default function Footer({ mainInfo, links, copyRight }) {
  return (
    <footer className="footer pt-5 bg-body-tertiary text-light-emphasis">
      <Container>
        <div>
          <Row>
            <Col md={4}>
              <h2 className="pb-4 fs-3 fw-bold">{mainInfo.nameWebsite}</h2>

              {mainInfo.information.map((elment, index) => {
                return (
                  <p key={index} className="">
                    <span className="fw-bold">{elment?.what} </span>
                    {elment.value}
                  </p>
                );
              })}
            </Col>
            {links.map((elment, elmentIndex) => {
              return (
                <Col key={elmentIndex} md={2}>
                  <h3 className="title-links pb-2 fw-semibold">
                    {elment.title}
                  </h3>
                  {elment.items.map((item, itemIndex) => {
                    return (
                      <p key={itemIndex} className="text-body-tertiary">
                        <a
                          href={item.url}
                          className=" text-decoration-none text-light-emphasis"
                        >
                          {item.what}
                        </a>
                      </p>
                    );
                  })}
                </Col>
              );
            })}
          </Row>
        </div>

        <hr />

        <div className="text-center py-2">
          <p className="">{copyRight}</p>
        </div>
      </Container>
    </footer>
  );
}

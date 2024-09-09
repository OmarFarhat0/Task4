import { Col, Container, Row } from "react-bootstrap";

import PreAchieveCards from "../preAchieveCards/PreAchieveCards";
import VideoCard from "../videoCard/VideoCard";
import AboutCards from "../aboutCards/AboutCards";

import "./aboutUsSection.css";

export default function AboutUsSection({
  introduce,
  videoPart,
  PreAchieveCardsData,
  featuresPart,
}) {
  return (
    <section className="about-us-section py-5" id="about-us">
      <Container>
        <div className="text-center pb-md-5">
          <h2 className="text-light-emphasis fw-bold">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>

        <Row className="pb-md-5">
          <Col md={6} className="pb-3 pb-md-0">
            <VideoCard data={videoPart.videoCardData} />
          </Col>
          <Col md={6}>
            <h3 className="text-light-emphasis fw-bold">
              {videoPart.nearVideo.title}
            </h3>
            <p className="pb-2 fst-italic">{videoPart.nearVideo.first}</p>

            {videoPart.nearVideo.second.map((element, index) => {
              return (
                <div key={index} className="d-flex gap-1">
                  {element.icon}
                  <p className="mb-2">{element.value}</p>
                </div>
              );
            })}

            <p className="pt-2">{videoPart.nearVideo.third}</p>
          </Col>
        </Row>

        <div className="pb-5">
          <PreAchieveCards items={PreAchieveCardsData} />
        </div>

        <div>
          <Row>
            <Col md={7} className="pb-3 p-md-0">
              <div className="pe-lg-5 h-100">
                <img
                  src={featuresPart.imgPath}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
            <Col md={5} className="p-lg-0">
              <div className="pb-3 pb-lg-5">
                <div>
                  <h3 className="text-light-emphasis fw-bold">
                    {featuresPart.introduce.title}
                  </h3>
                  <hr className="clr-primary-color hr-width-title opacity-100 " />
                  <p>{featuresPart.introduce.text}</p>
                </div>
              </div>

              <AboutCards data={featuresPart.aboutCardsData} />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

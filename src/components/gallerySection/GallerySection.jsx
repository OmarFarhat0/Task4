import { Container } from "react-bootstrap";

import GalleryCards from "../galleryCards/GalleryCards";

import "./gallerySection.css";

export default function GallerySection({ introduce, galleryCardsData }) {
  return (
    <div className="gallery-section py-5">
      <Container>
        <div className="text-center pb-4 pb-md-5">
          <h2 className="text-light-emphasis fw-bold ">{introduce.title}</h2>
          <hr className="clr-primary-color hr-width-title opacity-100 mx-auto" />
          <p>{introduce.text}</p>
        </div>
        <GalleryCards srcImages={galleryCardsData} />
      </Container>
    </div>
  );
}

import { useState } from "react";
import "./galleryCards.css";
import { Button, Col, Container, Row } from "react-bootstrap";

export default function GalleryCards({ srcImages }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function correctIndex(index) {
    return;
  }

  function getCurrentImages() {
    let ans = [];
    for (let i = currentIndex - 2; i <= currentIndex + 2; i++) {
      if (srcImages.leng)
        ans.push(
          <img
            src={srcImages[correctIndex(i)]}
            className={`${i === currentIndex ? "active" : ""}`}
          />
        );
    }
    return ans;
  }

  return (
    <div className="gallery-cards">
      <Container>
        <Row></Row>
        <div>
          {srcImages.map((elment, index) => {
            return <Button key={index} className="rounded-circle"></Button>;
          })}
        </div>
      </Container>
    </div>
  );
}

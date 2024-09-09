import { Button, Card } from "react-bootstrap";

import "./heroTextCard.css";

export default function HeroTextCard({ data }) {
  return (
    <div className="hero-text-card">
      <Card className="bg-transparent z-1  py-sm-4 border-0 border-top border-4 rounded-0">
        <Card.Body className="px-1 pt-2 pb-3">
          <Card.Title className="fs-1 text-light-emphasis pb-sm-2">
            {data.title}
          </Card.Title>
          <Card.Text className="py-sm-2">{data.text}</Card.Text>
          <Button className="border-0 px-sm-3 bg-primary-color">
            {data.contentBtn}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

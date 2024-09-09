import { useContext, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { VideoOffcanvasContext } from "../../App";
import { Alert } from "react-bootstrap";

import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import "./videoOffcanvas.css";

function videoOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const data = useContext(VideoOffcanvasContext);

  return (
    <>
      <div className="video-offcanvas">
        <Button
          className="bg-primary-color border-0 rounded-circle"
          onClick={handleShow}
        >
          <FaPlay className="fs-5" />
        </Button>

        <Offcanvas
          show={show}
          onHide={handleClose}
          className="top-50 start-50 translate-middle w-75 h-75"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{data.title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="pt-0">
            <Alert key="success" variant="success">
              If you see a blank screen, please wait a few seconds for the
              content to load.
            </Alert>

            {data.iframe}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default videoOffcanvas;

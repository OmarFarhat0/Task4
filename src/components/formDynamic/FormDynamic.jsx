import { Button, Col, Form, Row } from "react-bootstrap";

import "./formDynamic.css";

export default function FormDynamic({ data }) {
  function controlRender(element, index) {
    return (
      <Form.Group
        key={index}
        as={Col}
        controlId={`appointment-${element.type}-${index}`}
        sm={element?.sm}
        md={element?.md}
        lg={element?.lg}
      >
        <Form.Control
          type={element.type}
          placeholder={element?.placeholder}
          className="rounded-0 p-2 mb-3"
        />
      </Form.Group>
    );
  }

  function selectRender(element, elementIndex) {
    return (
      <Form.Group
        key={elementIndex}
        as={Col}
        controlId={`appointment-select-${elementIndex}`}
        sm={element?.sm}
        md={element?.md}
        lg={element?.lg}
      >
        <Form.Select className="rounded-0 p-2  mb-3">
          {element.items.map((item, itemIndex) => {
            return <option key={itemIndex}>{item}</option>;
          })}
        </Form.Select>
      </Form.Group>
    );
  }

  function textareaRender(element, index) {
    return (
      <Form.Group key={index} controlId={`appointment-textarea-${index}`}>
        <Form.Control
          as="textarea"
          rows={element.rows}
          placeholder={element?.placeholder}
          className="rounded-0 p-2 mb-3"
          sm={element?.sm}
          md={element?.md}
          lg={element?.lg}
        />
      </Form.Group>
    );
  }

  return (
    <div className="form-dynamic">
      <Form>
        <Row>
          {data.map((element, index) => {
            if (element.categories === "control") {
              return controlRender(element, index);
            } else if (element.categories === "select") {
              return selectRender(element, index);
            } else if (element.categories === "textarea") {
              return textareaRender(element, index);
            }
          })}

          <Button
            type="sumbit"
            className="bg-primary-color px-4 py-2 border-0 w-fit-content mx-auto"
          >
            Send
          </Button>
        </Row>
      </Form>
    </div>
  );
}

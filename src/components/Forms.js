import Form from "react-bootstrap/Form";

function Forms(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder} />
      </Form.Group>
    </Form>
  );
}

export default Forms;

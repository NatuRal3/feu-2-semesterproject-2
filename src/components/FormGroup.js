import Form from "react-bootstrap/Form";

function FormGroup(props) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        as="input"
        required={props.required}
        minLength={props.minLength}
        type={props.type}
        placeholder={props.placeholder}
        pattern={props.pattern}
        name={props.name}
      />
    </Form.Group>
  );
}

export default FormGroup;

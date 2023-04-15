import Button from "react-bootstrap/Button";

function Buttons(props) {
  return (
    <Button variant={props.variant} type={props.type} onClick={props.onClick}>
      {props.text}
    </Button>
  );
}

export default Buttons;

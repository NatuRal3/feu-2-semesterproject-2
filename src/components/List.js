import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function List(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <p>{props.amount}</p>
          <p>{props.bidderName}</p>
          <p>{props.created}</p>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default List;

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import deleteUserListings from "../tools/deleteUserListings";

function CardsGrid({ listings, delButton }) {
  if (!listings || !listings.length) {
    return <div>No listings to display</div>;
  }

  return (
    <Row xs={1} md={2} className="g-4">
      {listings.map((listing) => (
        <Col key={listing.id}>
          <Card>
            <Card.Img variant="top" src={listing.media} />
            <Card.Body>
              <Card.Title>{listing.title}</Card.Title>
              <Card.Text>{listing.description}</Card.Text>
              {delButton && <Button onClick={() => deleteUserListings(listing.id)}>DELETE</Button>}
              <Button>VIEW</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default CardsGrid;

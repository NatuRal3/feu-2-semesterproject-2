import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function CardsGrid({ listings }) {
  return (
    <Row xs={1} md={2} className="g-4">
      {Array.isArray(listings) &&
        listings.map((listing) => (
          <Col key={listing.id}>
            <Card>
              <Card.Img variant="top" src={listing.media} />
              <Card.Body>
                <Card.Title>{listing.title}</Card.Title>
                <Card.Text>{listing.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
}

export default CardsGrid;

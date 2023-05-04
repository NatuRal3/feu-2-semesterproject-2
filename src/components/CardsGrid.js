import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import deleteUserListings from "../tools/deleteUserListings";
import { useNavigate } from "react-router-dom";

function CardsGrid({ listings, delButton }) {
  const navigate = useNavigate();

  function handleViewClick(listingId) {
    navigate(`/listing/${listingId}`);
  }

  if (!listings || !listings.length) {
    return <div>No listings to display</div>;
  }

  return (
    <Row xs={1} md={2} className="g-4">
      {listings.map((listing) => (
        <Col key={listing.id}>
          <Card onClick={() => handleViewClick(listing.id)}>
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

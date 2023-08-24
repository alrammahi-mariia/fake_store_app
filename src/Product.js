import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Product = ({
  id,
  title,
  category,
  price,
  description,
  image,
  rating,
}) => {
  return (
    <div className="card-container">
      <Card
        className="card"
        style={{ width: "18rem", padding: "2rem", margin: "1rem" }}
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Subtitle>{id}</Card.Subtitle>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Category: {category}</Card.Text>
          <Card.Text>Price: €{price}</Card.Text>
          <Card.Text>Rating: {rating.rate}</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;

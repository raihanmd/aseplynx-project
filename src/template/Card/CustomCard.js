import { Col, Card, Button } from "react-bootstrap";

const CustomCard = ({ imageURL, title, content }) => {
  return (
    <Col className="col-4 d-flex justify-content-center g-5 g-md-3" xs={12} md={6} lg={4}>
      <Card style={{ width: "20rem" }}>
        <Card.Img className="p-3" variant="top" src={imageURL} />
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>{content}</Card.Text>
          <Button className="button-hero border-0 mx-auto">Kunjungi lebih lanjut.</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomCard;

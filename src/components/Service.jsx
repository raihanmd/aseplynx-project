import service1 from "../assets/image/service-1.png";
import service2 from "../assets/image/service-2.png";
import service3 from "../assets/image/service-3.png";
import { Container, Row, Col } from "react-bootstrap";
import CustomCard from "../template/Card/CustomCard";

function Service() {
  const cards = [
    { imageURL: service1, title: "Lorem ipsum", content: "Ini adalah content" },
    { imageURL: service2, title: "Lorem ipsum", content: "Ini adalah content" },
    { imageURL: service3, title: "Lorem ipsum", content: "Ini adalah content" },
    { imageURL: service1, title: "Lorem ipsum", content: "Ini adalah content" },
    { imageURL: service2, title: "Lorem ipsum", content: "Ini adalah content" },
    { imageURL: service3, title: "Lorem ipsum", content: "Ini adalah content" },
  ];

  return (
    <div className="service" id="services">
      <Container>
        <Row>
          <Col>
            <h1 className="text-center my-5">Layanan Kami</h1>
          </Col>
        </Row>

        <Row>
          {cards.map((card) => (
            <CustomCard imageURL={card.imageURL} title={card.title} content={card.content} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Service;

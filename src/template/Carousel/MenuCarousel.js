import { Carousel, Image, Col, Row } from "react-bootstrap";
import carouselBg from "../../assets/image/subs-img.png";

const MenuCarousel = ({ Items }) => {
  return (
    <Carousel
      controls={false}
      style={{
        backgroundImage: `url(${carouselBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {Items.map((item) => (
        <Carousel.Item style={{ background: "rgba(50, 50, 50, 0.8)" }}>
          <Row className="justify-content-center align-items-center">
            <Col xs={7} md={6} className="d-flex justify-content-center align-items-center flex-column text-light p-5">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </Col>
            <Col xs={5} md={6} className="d-flex justify-content-center align-items-center">
              <Image className="d-block img-fluid" src={item.imageURL} alt="First slide" />
            </Col>
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MenuCarousel;

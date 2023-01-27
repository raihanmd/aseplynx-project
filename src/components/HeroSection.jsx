import { Container, Row, Col } from "react-bootstrap";
import hero from "../assets/image/hero-img.png";

const HeroSection = () => {
  return (
    <div className="hero-section d-flex">
      <Container>
        <Row>
          <Col className="col-lg-6 col-md-7 my-auto">
            <h1 className="text-hero">Makanan Kekinian Hanya di Kami</h1>
            <p>kami menyediakan beberapa menu mungkin anda suka coba lihat beberapa menu kami </p>

            <button className="button-hero btn ">Menu kami </button>
          </Col>
          <Col className="col-lg-6">
            <img className="img-fluid" src={hero} alt="tes" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;

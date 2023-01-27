import { Col, Container, Row } from "react-bootstrap";
import menu1 from "../assets/image/menu-1.png";
import menu2 from "../assets/image/menu-2.png";
import menu3 from "../assets/image/menu-3.png";
import menu4 from "../assets/image/menu-4.png";

import MenuCarousel from "../template/Carousel/MenuCarousel";

const Menus = () => {
  const allMenu = [
    {
      imageURL: menu1,
      title: "Bakmi Ayam",
      content: "ini adlah content",
    },
    {
      imageURL: menu2,
      title: "Roasted Bread",
      content: "ini adlah content",
    },
    {
      imageURL: menu3,
      title: "Bakmi Udang",
      content: "ini adlah content",
    },
    {
      imageURL: menu4,
      title: "Fruit Soup",
      content: "ini adlah content",
    },
  ];

  const menuPilihan = allMenu.filter((menu) => menu.imageURL === menu2 || menu.imageURL === menu3);

  console.log(menuPilihan);

  return (
    <Container className="py-5">
      <Row>
        <Col xs={12} id="menu" className="p-5 text-center">
          <h1>Menu Pilihan Kami</h1>
        </Col>
        <Col>
          <MenuCarousel Items={menuPilihan} />
        </Col>
      </Row>
    </Container>
  );
};

export default Menus;

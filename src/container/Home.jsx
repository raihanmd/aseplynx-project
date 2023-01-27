import HeroSection from "../components/HeroSection";
import Menus from "../components/Menus";
import Service from "../components/Service";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Service />
      <Menus />
    </div>
  );
};

export default Home;

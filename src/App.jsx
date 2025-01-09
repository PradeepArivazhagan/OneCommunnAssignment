import Banner from "./Sections/Banner";
import Header from "./Components/Header";
import Categories from "./Sections/Categories";
import Segments from "./Sections/Segments";
import Trending from "./Sections/Trending";
import InteriorDesign from "./Sections/InteriorDesign";
import AboutUs from "./Sections/AboutUs";
import OurProcess from "./Sections/OurProcess";
import StandOut from "./Sections/StandOut";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Segments />
      <Trending />
      <InteriorDesign />
      <AboutUs />
      <OurProcess />
      <StandOut />
      <Footer />
    </>
  );
};

export default App;

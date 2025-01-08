import Banner from "./Sections/Banner";
import Header from "./Components/Header";
import Categories from "./Sections/Categories";
import Segments from "./Sections/Segments";
import Trending from "./Sections/Trending";
import InteriorDesign from "./Sections/InteriorDesign";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <Segments />
      <Trending />
      <InteriorDesign />
    </>
  );
};

export default App;

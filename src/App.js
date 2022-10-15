import "./App.css";
import PreNavbar from "./components/PreNavbar";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider.js";
import Offers from "./components/Offers";
import Heading from "./components/Heading";
import StarProduct from "./components/StarProduct";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessories.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Footer from "./components/Footer.js"
import NavOptios from "./components/NavOptios.js"
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import data from "./data/data.json";
const { banner } = data;
const { offer } = data;
const { hotAccessoriesCover } = data;
const { hotAccessories } = data;
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={banner.start} />
      <Offers offer={offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Routes>
        <Route
          path="/music"
          element={
            <HotAccessories
              music={hotAccessories.music}
              musicCover={hotAccessoriesCover.music}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={hotAccessories.smartDevice}
              smartDeviceCover={hotAccessoriesCover.smartDevice}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/home"
          element={
            <HotAccessories
              home={hotAccessories.home}
              homeCover={hotAccessoriesCover.home}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={hotAccessories.lifeStyle}
              lifeStyleCover={hotAccessoriesCover.lifeStyle}
            />
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={hotAccessories.mobileAccessories}
              mobileAccessoriesCover={hotAccessoriesCover.mobileAccessories}
            />
          }
        />
      </Routes>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading  text="IN THE PRESS"/>
      <Banner  banner={data.banner}/>
      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;

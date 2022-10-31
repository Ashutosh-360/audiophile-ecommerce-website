// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import BottomGear from "./components/BottomGear/BottomGear";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Earphones from "./pages/Earphones/Earphones";
import Headphones from "./pages/Headphones/Headphones";
import Home from "./pages/Home/Home";
import Speakers from "./pages/Speakers/Speakers";
import XX59Headphone from "./pages/XX59Headphone/XX59Headphone";
import XX99MarkOneHeadphone from "./pages/XX99MarkOneHeadphone/XX99MarkOneHeadphone";
import XX99MarkTwoHeadphones from "./pages/XX99MarkTwoHeadphones/XX99MarkTwoHeadphones";
import YX1Earphone from "./pages/YXEarphone/YX1Earphone";
import ZX7Speaker from "./pages/ZX7Speaker/ZX7Speaker";
import ZX9Speaker from "./pages/ZX9Speaker/ZX9Speaker";


function App() {
  // const count=useSelector((state) => state.cart.cartCounter);
  return (
    <div className="App">
    {/* <h1>{count}</h1> */}
      <Header />

      <Routes>
        <Route path="" index element={<Home />} />
        <Route path="headphones" element={<Headphones />} />
        <Route path="speakers" element={<Speakers/>} />
        <Route path="earphones" element={<Earphones/>} />
        <Route path="xx99-mark-two-headphones" element={<XX99MarkTwoHeadphones/>}  />
        <Route path="xx99-mark-one-headphone" element={<XX99MarkOneHeadphone/>}  />
        <Route path="xx59-headphone" element={<XX59Headphone/>}  />
        <Route path="zx9-speaker" element={<ZX9Speaker/>}  />
        <Route path="zx7-speaker" element={<ZX7Speaker/>}  />
        <Route path="yx1-earphone" element={<YX1Earphone/>}  />
        <Route path="cart" element={<Cart/>}  />
      </Routes>
      <div className="bottom-gear">
        <BottomGear />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;

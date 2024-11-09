import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { Provider } from "./components/ui/provider";
import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  return (
    <Provider>
      <div className="App">
        <Router>
          <NavMenu />
          <NavBar />

          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:handle" element={<ProductPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;

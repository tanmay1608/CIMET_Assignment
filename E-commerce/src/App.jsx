import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <div>
      <CartContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </CartContextProvider>
    </div>
  );
}

export default App;

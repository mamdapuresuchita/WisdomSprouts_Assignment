import "./App.css";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ThemeProvider from "./hooks/ThemeProvider";
import CartProvider from "./hooks/CartProvider";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/Cart" element={<Cart/>}>

            </Route>
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

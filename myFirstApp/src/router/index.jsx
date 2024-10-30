import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ProfilePage from "../pages/profile";
import NotFoundPage from "../pages/notfound";
import UserPage from "../pages/user";
import ProductsPage from "../pages/products";
import ProductPage from "../pages/product";
import AppProvider from "../contexts/appcontext";

const AppRouter = (props) => {
  return (
   <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/user/:username" element={<UserPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </AppProvider>
  );
};

export default AppRouter;

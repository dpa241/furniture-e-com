
// Router
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"

import ProductDetails from "./pages/SingleProduct/ProductDetails"
import Header from "./pages/Shared/Header/Header"
import Footer from "./pages/Shared/Footer/Footer"
import CartPage from "./pages/Cart/CartPage"
import Sidebar from "./pages/Shared/Sidebar/Sidebar"
import LogIn from "./pages/SignUpAndSignIn/LogIn/LogIn"
import SignUp from "./pages/SignUpAndSignIn/SignUp/SignUp"
import Profile from "./pages/Profile/Profile"
// import PopularPage from "./pages/NewTrenFeatPage/NewTrendFeatPage"
import Category from "./pages/CategoryPage/Category"
import Home from "./pages/Home/Home/Home"
import NewTrendFeatPage from "./pages/NewTrenFeatPage/NewTrendFeatPage"
import Shop from "./pages/Shop/Shop"
import About from "./pages/About/About"
import { Contact } from "./pages/Contact/Contact"
import ScrollTop from "./pages/Shared/ScroollTop/ScrollTop"


function App() {
  return (
    <div className="text-[#2F302C] font-primary">
      <Router>
        <Header/>
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/category/:catName" element={<Category/>}/>
          <Route path="/shop" element={<Shop/>}/>
          {/* <Route path="/category/:id"/> */}
          <Route path="/cartpage" element={<CartPage/>}/>
          <Route path="/popular/:catName" element={<NewTrendFeatPage/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App

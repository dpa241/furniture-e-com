
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
import PopularPage from "./pages/NewTrenFeatPage/NewTrendFeatPage"
import Category from "./pages/CategoryPage/Category"
import Home from "./pages/Home/Home/Home"


function App() {
  return (
    <div className="text-[#2F302C]">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/category/:catName" element={<Category/>}/>
          {/* <Route path="/category/:id"/> */}
          <Route path="/cartpage" element={<CartPage/>}/>
          <Route path="/popular/:catName" element={<PopularPage/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App

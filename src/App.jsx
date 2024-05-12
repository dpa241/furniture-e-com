
// Router
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Header from "./components/main/Header/Header"
import Footer from "./components/main/Footer/Footer"
import CartPage from "./pages/Cart/CartPage"
import Sidebar from "./components/main/Sidebar/Sidebar"
import LogIn from "./pages/SignUpAndSignIn/LogIn/LogIn"
import SignUp from "./pages/SignUpAndSignIn/SignUp/SignUp"
import Profile from "./pages/Profile/Profile"
import PopularPage from "./pages/PopularPage/PopularPage"


function App() {

  return (
    <div className="text-[#2F302C]">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/product/:id" element={<ProductDetails/>}/>
          <Route path="/category/:id"/>
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

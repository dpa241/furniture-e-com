import Main from "@/layout/Main";
import About from "@/pages/About/About";
import CartPage from "@/pages/Cart/CartPage";
import Category from "@/pages/CategoryPage/Category";
import { Contact } from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home/Home";
import NewTrendFeatPage from "@/pages/NewTrenFeatPage/NewTrendFeatPage";
import Profile from "@/pages/Profile/Profile";
import Shop from "@/pages/Shop/Shop";
import LogIn from "@/pages/SignUpAndSignIn/LogIn/LogIn";
import SignUp from "@/pages/SignUpAndSignIn/SignUp/SignUp";
import ProductDetails from "@/pages/SingleProduct/ProductDetails";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:"/product/:id",
                element:<ProductDetails/>
            },
            {
                path: '/category/:catName',
                element: <Category/>
            },
            {
                path: '/shop',
                element: <Shop/>
            },
            {
                path: '/cartpage',
                element: <CartPage/>
            },
            {
                path: '/popular/:catName',
                element: <NewTrendFeatPage/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/login',
                element: <LogIn/>
            },
        ]
    }
])
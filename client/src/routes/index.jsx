import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Landing from "../layout/Landing";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ProtectedRoute from "./ProtectedRoute";
import Features from "../pages/Features";
import PricingPage from "../pages/Pricing";

export const RouterProvider = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}>
                    <Route index element={<Home/>}/>
                    <Route path="features" element={<Features/>}/>
                    <Route path="pricing" element={<PricingPage/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Route>
                <Route path="privacy" element={<PrivacyPolicy/>}/>
                <Route path="signin" element={<Signin/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
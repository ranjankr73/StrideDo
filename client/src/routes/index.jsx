import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Landing from "../layout/Landing";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
// import PrivacyPolicy from "../pages/PrivacyPolicy";
import ProtectedRoute from "./ProtectedRoute";
import Features from "../pages/Features";
import PricingPage from "../pages/Pricing";
import Error404 from "../pages/Error404";
import ComingSoon from "../pages/ComingSoon";

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
                <Route path="signin" element={<Signin/>}/>
                <Route path="signup" element={<Signup/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="dashboard" element={<Dashboard/>}/>
                </Route>
                <Route path="forgot-password" element={<ComingSoon/>}/>
                <Route path="demo" element={<ComingSoon/>}/>
                <Route path="download" element={<ComingSoon/>}/>
                <Route path="blog" element={<ComingSoon/>}/>
                <Route path="support" element={<ComingSoon/>}/>
                <Route path="documentation" element={<ComingSoon/>}/>
                <Route path="privacy" element={<Error404/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </BrowserRouter>
    );
}
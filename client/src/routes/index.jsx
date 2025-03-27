import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Landing from "../layout/Landing";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ProtectedRoute from "./ProtectedRoute";
import TaskList from "../components/dashboard/TaskList";

export const RouterProvider = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="services" element={<Services/>}/>
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
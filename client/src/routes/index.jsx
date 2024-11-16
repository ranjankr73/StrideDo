import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage.jsx";
import { LandingPage } from "../pages/LandingPage.jsx";
import { LoginForm } from "../components/forms/LoginForm.jsx";
import { SignupForm } from "../components/forms/SignupForm.jsx";
import FormDisplayPage from "../pages/FormDisplayPage.jsx";
import MainLayout from "../layout/MainLayout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>} >
      <Route path="" element={<LandingPage/>} />
      <Route path="home" element={<HomePage/>} />
      <Route path="login" element={<FormDisplayPage children={<LoginForm/>} />} />
      <Route path="signup" element={<FormDisplayPage children={<SignupForm/>} />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionStatusRevalidation: true,
    },
  }
);

export { router };

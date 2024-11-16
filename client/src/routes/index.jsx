import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage.jsx";
import { LandingPage } from "../pages/LandingPage.jsx";
import { LoginForm } from "../components/forms/LoginForm.jsx";
import { SignupForm } from "../components/forms/SignupForm.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />,
      children: [
        {
            path: "login",
            element: <LoginForm/>
        },
        {
          path: "signup",
          element: <SignupForm/>
        }
      ]
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ],
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

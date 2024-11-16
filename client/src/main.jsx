import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./app/store.js";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/index.jsx";

import { Provider as ChakraProvider } from "@/components/ui/provider";
import { Toaster } from "react-hot-toast";
import "animate.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ChakraProvider>
    </Provider>
  </StrictMode>
);

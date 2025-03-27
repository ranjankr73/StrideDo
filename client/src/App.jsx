import { useEffect } from "react";
import { RouterProvider } from "./routes";
import { Toaster } from "react-hot-toast";
import useAuthStore from "./store/auth";

function App() {
  const { initializeAuth, currentUser, updateAccessToken } = useAuthStore();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        await initializeAuth();
      } catch (error) {
        await updateAccessToken();
      }
    };

    getCurrentUser();
  }, [initializeAuth]);

  return (
    <>
      <RouterProvider/>
      <Toaster
        position="top-center"
        toastOptions={{
          className: "font-open-sans",
          success: {
            className: "border-2 border-green-500",
            iconTheme: {
              primary: "#4CAF50",
              secondary: "#fff",
            },
          },
          error: {
            className: "border-2 border-red-500",
          },
        }}
      />
    </>
  );
}

export default App;

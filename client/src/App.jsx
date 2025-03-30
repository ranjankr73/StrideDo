import { useEffect } from "react";
import { RouterProvider } from "./routes";
import toast, { Toaster } from "react-hot-toast";
import useAuthStore from "./store/auth";
// import useThemeStore from "./store/theme";

function App() {
  const { initializeAuth, updateAccessToken } = useAuthStore();
  // const darkMode = useThemeStore((state) => state.darkMode);
  
  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, [darkMode]);

  useEffect(() => {
    const checkAuth = async () => {
      const refreshed = await updateAccessToken();
      if (refreshed) {
        const response = await initializeAuth();
        if(response){
          toast.success("Welcome back.");
        }
      }
    };
    
    checkAuth();
  }, []);

  return (
    <>
      <RouterProvider />
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

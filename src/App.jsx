import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import ErrorRoute from "./errorRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Halaman Utama</div>,
      errorElement: <ErrorRoute />
    },
    {
      path: "/login",
      element: <SignInPage />
    },
    {
      path: "/register",
      element: <SignUpPage />
    },
  ])
  return <RouterProvider router={router} />
};

export default App;

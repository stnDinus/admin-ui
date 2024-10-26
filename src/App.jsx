import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import ErrorRoute from "./errorRoute";
import ForgotPasswordPage from "./pages/ForgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
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
    {
      path: "/forgot-password",
      element: <ForgotPasswordPage />
    },
    {
      path: "/balance",
      element: <BalancePage />
    }
  ])
  return <RouterProvider router={router} />
};

export default App;

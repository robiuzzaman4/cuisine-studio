import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChefDetails from "../components/ChefDetails";
import PrivetRoute from "./PrivetRoute";
import Spinner from "../components/Spinner";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/chef/:id",
                element: <PrivetRoute><ChefDetails></ChefDetails></PrivetRoute>,
                loader: ({params}) => fetch(`https://b7a10-chef-recipe-hunter-server-side-robiuzzaman4.vercel.app/chef/${params.id}`)
            }
        ]
    },
]);

export default router;
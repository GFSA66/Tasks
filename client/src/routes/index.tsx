import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/home";
import UserPage from "../components/auth/login/login";
import Form from "../pages/Form";
import AddPage from "../add/add";

const router = createBrowserRouter([{
    path: '/',
    children:[
        { path: "", element: <Form /> },
        {path: 'add', element: <AddPage />},
        {path: 'user', element: <UserPage />},
        { path: "*", element: <Navigate to={"/"} /> },
    ]

}])

export default router
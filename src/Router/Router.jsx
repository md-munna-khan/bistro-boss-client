import {
    createBrowserRouter,
 
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Order from "../Order/Order";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Shared/Secret";
import Dashboard from "../layout/Dashboard";
import Carts from "../pages/Dashboard/Carts";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/order/:category',
            element:<Order></Order>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        {
            path:'/secret',
            element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'carts',
          element:<Carts></Carts>
        }
      ]
    }
  ]);
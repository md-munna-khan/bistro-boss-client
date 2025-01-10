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
import Allusers from "../pages/Dashboard/Allusres/Allusers";
import AddItems from "../pages/Dashboard/additems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/paymentHistory/PaymentHistory";

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
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        // normal users route
        {
          path:'carts',
          element:<Carts></Carts>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        // admin only routes
        {
            path:'add-items',
            element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
            path:'manage-items',
            element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
        {
            path:'update-item/:id',
            element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
            loader:({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:'users',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>
        }
      ]
    }
  ]);
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import AllToysRoute from "../Pages/AllToysRoute/AllToysRoute";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Orders from "../Pages/Orders/Orders";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";
import AddAToy from "../Pages/AddAToy/AddAToy";
import Blog from "../Pages/Blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/checkout/:id',
          element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
          loader: ({params})=>fetch(`https://anime-toy-emporium-server.vercel.app/alltoys/${params.id}`)        
        },
        {
          path: '/ordertoys',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        },
        {
          path: '/addatoy',
          element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
        
      ]
    },
    {
      path: '/alltoys',
      element: <AllToysRoute></AllToysRoute>,
      children: [{
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: ':id',
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://anime-toy-emporium-server.vercel.app/alltoys/${params.id}`)

      },
      
      ]
    },
    {
      path: '*',
      element:<NotFound></NotFound>
    }
  ]);

export default router;
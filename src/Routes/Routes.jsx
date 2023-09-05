import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import AllToysRoute from "../Pages/AllToysRoute/AllToysRoute";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Home/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";

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
          path: 'checkout/:id',
          element:<CheckOut></CheckOut>,
          loader: ({params})=>fetch(`http://localhost:3000/alltoys/${params.id}`)        
        },
        
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
        element: <ToyDetails></ToyDetails>,
        loader: ({ params }) => fetch(`http://localhost:3000/alltoys/${params.id}`)

      },
      
        
      ]
    }
  ]);

export default router;
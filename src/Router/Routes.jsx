import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../Pages/Home/AddService";
import Home from "../Pages/Home/Home";
import HomeServices from "../Pages/Home/HomeServices";
import ServiceDetails from "../Pages/Home/ServiceDetails";
import Services from "../Pages/Home/Services";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import MyReview from "../Pages/Review/MyReview";
import SubmitReview from "../Pages/Review/SubmitReview";
import Blogs from "../Pages/Shared/Blogs";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: 'home',
        element: <HomeServices></HomeServices>
      },
      {
        path: "service/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "review/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`),
        element: (
          <PrivetRoutes>
            <SubmitReview></SubmitReview>
          </PrivetRoutes>
        ),
      },
      {
        path: "myReview/:serviceId",
        element: (
          <PrivetRoutes>
            <MyReview></MyReview>
          </PrivetRoutes>
        ),
        loader: (params) => fetch(`http://localhost:5000/reviews?serviceId=${params.serviceId}`),
      },
      {
        path: 'addService',
        element: <AddService></AddService>
      },
      {
        path: 'blogs',
        element: <Blogs>z</Blogs>
      }
    ],
  },
]);

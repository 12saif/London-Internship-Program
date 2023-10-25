import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from "./Screens/Home/Home";
import People from './Screens/People/People';
import Calendar from './Screens/Calendar/Calendar';
import Share from './Screens/Share/Share';
import Document from './Screens/Document/Document';
import File from './Screens/File/File';
import WhishList from './Screens/WhishList/WhishList';
import Setting from './Screens/Setting/Setting';
import Profile from './Screens/Profile/Profile';



const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet /> {/* ! Home page content  Using Outlet layout  */}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/people",
        element: <People />,
      },
      {
        path: "/calendar",
        element: <Calendar />,
      },
      {
        path: "/share",
        element: <Share />,
      },
      {
        path: "/document",
        element: <Document />,
      },
      {
        path: "/file",
        element: <File />,
      },
      {
        path: "/wishList",
        element: <WhishList />,
      },
      {
        path: "/setting",
        element: <Setting />,
      },
    ],
  },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/login",
  //   element: <Login />,
  // },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

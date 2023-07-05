import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
}
  from "react-router-dom";
//import others html pages
import Mainpage from './html/mainpage'
import Settings from './html/settings'

//in this part add the router
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}


//this part is necessary to make the router, to be able to access any page
const router = createBrowserRouter([
  {
    //default page
    path: "/Mainpage",
    element: <Mainpage />,
  },{
     //signup
     path: "/signup",
     element: <Mainpage />,
  },{
    //settings
    path: "/",
    element: <Settings />,
  },{
     //accounts
     path: "/accounts",
     element: <Mainpage />,
  },{
    //make transfers
    path: "/personal",
    element: <Mainpage />,
 }
]);



export default App;


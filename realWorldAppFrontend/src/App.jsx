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
import BankAcoount from './html/bankAccounts'
import Login from './html/login'

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
    path: "/",
    element: <Login />,
  },{
     //signup
     path: "/signup",
     element: <Login />,
  },{
    //settings
    path: "/setting",
    element: <Settings />,
  },{
     //accounts
     path: "/",
     element: <BankAcoount />,
  },{
    //make transfers
    path: "/personal",
    element: <Login />,
 },{
  //make transfers
  path: "/login",
  element: <Login />,
}
]);



export default App;


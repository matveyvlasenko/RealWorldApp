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
import Login from './html/login'
import TransferenciasPage from './html/tranfers'
import NewTransferenciasPage from './html/newTransfer'
import TransferMenu from './html/transfermenu'


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
     //create new transfer
     path: "/newTransfer",
     element: <NewTransferenciasPage />,
  },{
    path: "/TransferMenu",
    element: <TransferMenu />,
 },{
  //make transfers
  path: "/login",
  element: <Login />,
},{
  //make transfers
  path: "/transfers",
  element: <TransferenciasPage />,
}
]);



export default App;


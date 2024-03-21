import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Home.jsx'
import { Consumo } from './Consumo.jsx'
import { Carrousel } from './Carrousel.jsx'
import { RickAndMorty } from './RickAndMorty.jsx'
import { TesteInputs } from './TesteInputs.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Consumo",
    element: <Consumo />,
  },
  {
    path: "/Carrousel",
    element: <Carrousel />,
  },
  {
    path: "/Rm",
    element: <RickAndMorty />,
  },
  {
    path: "/TesteInputs",
    element: <TesteInputs />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)

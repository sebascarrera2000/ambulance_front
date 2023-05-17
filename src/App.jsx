import React from 'react';

// Import reactRouter Dom Dependencies
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import pages
import { Home } from './pages/Home'
import { About } from './pages/Dispatch'
import { HomeMedic } from './pages/HomeMedic'

// TIENE QUE LLAMAR LOS COMPONENTES ACÁ
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "homemedic",
    element: <HomeMedic/>,
  },
]);

function App() {

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export { App }

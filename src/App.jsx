import React from 'react';

// Import reactRouter Dom Dependencies
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import pages
import { Home } from './pages/Home'
import { About } from './pages/About'

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
]);

function App() {

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export { App }

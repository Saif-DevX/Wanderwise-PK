import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./Pages/AppLayout"
import Error from "./UI/Error"
import Home from "./Components/Home"
import About from "./Components/About"
import Explore from "./Components/Explore"
import Contact from "./Components/Contact"
import Paris from "./UI/Paris"
import Bali from "./UI/Bali"
import NewYork from "./UI/NewYork"
import Tokyo from "./UI/Tokyo"

const App = () => {

  const Router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element: <About/>
        },
        {
          path:"/explore",
          element:<Explore/>
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:"/paris",
          element:<Paris/>
        },
        {
          path:"/bali",
          element:<Bali/>
        },
        {
          path:"/newyork",
          element:<NewYork/>
        },
        {
          path:"/tokyo",
          element:<Tokyo/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={Router} />
    </>
  )
}

export default App

import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error404 from '../views/Error404'
import Home from '../views/Home'
import Detail from '../views/Detail'
import Profile from '../views/Profile'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <Error404/>
    },
    {
        path: "/detail/:detailId",
        element: <Detail/>
    },
    {
      path: "/profile",
      element: <Profile/>,
      children: [
        {
          path: "my-info",
          element: <div><h1>My INFO</h1></div>
        }, {
            path: "like-events",
            element: <div><h1>Like Events</h1></div>
          }
      ],
    }
])

function MyRoutes() {
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default MyRoutes
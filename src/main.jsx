import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './pages/Error.jsx'
import Home from './pages/Home.jsx'
import Posts, { postLoader } from './pages/Posts.jsx'
import Comments, { commentsLoader } from './pages/Comments.jsx'
import Albums, { albumsLoader } from './pages/Albums.jsx'
import Photos, { photosLoader } from './pages/Photos.jsx'
import Todos, { todosLoader } from './pages/Todos.jsx'
import Users, { usersLoader } from './pages/Users.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "posts",
        element: <Posts />,
        loader: postLoader,
      },
      {
        path: "comments",
        loader: commentsLoader,
        element: <Comments />
      },
      {
        path: "albums",
        loader: albumsLoader,
        element: <Albums />
      },
      {
        path: "photos",
        loader: photosLoader,
        element: <Photos />
      },
      {
        path: "todos",
        loader: todosLoader,
        element: <Todos />
      },
      {
        path: "users",
        loader: usersLoader,
        element: <Users />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

// В корзине всё слетает в вёрстке, я не понимаю почему

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header/>
        <div>
          <Outlet/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    ),
    children:[
      {
        path: "/",
        element: <MainPage/>,
      },
      {
        path:"/cart",
        element: <div>CART</div>
      }
    ]
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

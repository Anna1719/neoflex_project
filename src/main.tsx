import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage.tsx'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import './index.css'
import style from './css/Main.module.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className={style.wrapper}>
        <Header/>
        <div className={style.outlet}>
          <Outlet/>
        </div>
          <Footer/>
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
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

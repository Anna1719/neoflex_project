import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './main_page/MainPage.tsx'
import Header from './header/Header.tsx'
import Footer from './footer/Footer.tsx'
import './index.css'
import style from './main_page/Main.module.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import CartProvider from './provider/CartProvider.tsx'

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
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)

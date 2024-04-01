import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './main_page/MainPage.tsx'
import Header from './header/Header.tsx'
import Footer, { routes } from './footer/Footer.tsx'
import './index.css'
import style from './main_page/Main.module.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import CartProvider from './provider/CartProvider.tsx'
import { Cart } from './cart/Cart.tsx'
import { EmptyPage } from './empty_page/EmptyPage.tsx'
import { Contacts } from './contacts/Contacts.tsx'

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
        path:routes.CART,
        element: <Cart/>
      },
      {
        path:routes.CONTACTS,
        element: <Contacts/>
      },
      {
        path:routes.LIKES,
        element: <EmptyPage/>
      },
      {
        path:routes.TOS,
        element: <EmptyPage/>
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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'
import LoginPage from './components/Pages/login.jsx'
import RegisterPage from './components/Pages/register.jsx'
import HomePage from './components/Pages/home.jsx'
import ProductPage from './components/Pages/product.jsx'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/register',
    element: <RegisterPage/>
  },
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/product',
    element: <ProductPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

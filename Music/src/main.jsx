import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Customizer from './pages/Customizer.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import ThreeJsTest from './pages/ThreeJsTest.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path: "/", element:<App/>},
  {path: "/customizer", element:<Customizer/>},
  {path: "*", element: <PageNotFound/>},
  {path: "/test", element: <ThreeJsTest/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

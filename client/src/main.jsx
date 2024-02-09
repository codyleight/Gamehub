
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductItem from './pages/ProductItem';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    //error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: '/login',
        element: <Login />
      }, 

      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/products/:id',
        element: <ProductItem />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

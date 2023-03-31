import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import Login from './Login';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    // http://localhost:3001
    element: <App />,
  },
  {
    path : '/Register' ,
    // http://localhost:3001/register
    element :<Register style={{backgroundColor:"blue"}}/>
  },
  {
    path : '/Login' ,
    // http://localhost:3001
    element : <Login style={{backgroundColor:"blue"}}/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

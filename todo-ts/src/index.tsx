import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider} from "react-router-dom";

import { Provider } from 'react-redux';
import { store } from './Redux/taskStore';

import Root from './routes/root';
import ErrorPage from "./routes/error-page";
import Daily from './routes/daily';
import General from './routes/general';
import Add from './routes/add';
import Details from './routes/details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "all",
        element: <App />,
      },
      {
        path: "daily",
        element: <Daily />,
      },
      {
        path: "general",
        element: <General />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "details/:id",
        element: <Details />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layouts/Layout";
import HomePage from "./routes/HomePage";
import ErrorPage from "./ErrorPage";
import SingleRepo from "./routes/SingleRepo";
import ErrorRepo from "./routes/ErrorRepo";


export default function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/:name',
          element: <SingleRepo />
        },
        {
          path: '/ErrorRepo',
          element: <ErrorRepo />
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './page/HomePage.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/HomePage.tsx';
import MovieDetails from './page/MovieDetails.tsx';
import RootLayout from './page/RootLayout.tsx';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },

      {
        path: '/movie/:id',
        element: <MovieDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);

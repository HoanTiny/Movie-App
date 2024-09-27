/* eslint-disable react-refresh/only-export-components */
// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './page/HomePage.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './page/RootLayout.tsx';
import ModalProvider from './context/ModalProvider.tsx';
import { lazy } from 'react';

const PeoplePage = lazy(() => import('@page/PeoplePage.tsx'));
const SearchPage = lazy(() => import('@page/SearchPage.tsx'));
const MovieDetails = lazy(() => import('@page/MovieDetails.tsx'));
const TVShowDetails = lazy(() => import('@page/TVShowDetails.tsx'));
const HomePage = lazy(() => import('@page/HomePage.tsx'));

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

      {
        path: '/tv/:id',
        element: <TVShowDetails />,
      },

      {
        path: '/search',
        element: <SearchPage />,
      },

      {
        path: '/people/:id',
        element: <PeoplePage />,
        loader: async ({ params }) => {
          const { id } = params;
          const res = await fetch(
            `https://api.themoviedb.org/3/person/${id}?append_to_response=combined_credits`,
            {
              headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
              },
            }
          );

          return res;
        },
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ModalProvider>
    <RouterProvider router={router} />
  </ModalProvider>
  // </StrictMode>
);

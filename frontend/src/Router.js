import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Level } from './components/Level/Level';
import React from 'react';
import { MainPage } from './components/MainPage/MainPage';
import { LandingPage } from './components/LandingPage/LandingPage';

export const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/game',
    element: <MainPage />,
  },
  {
    path: '/:gameId/level/:id',
    element: <Level />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
]);

export const Router = () => <RouterProvider router={browserRouter} />;

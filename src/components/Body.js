import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Registration from './Registration';
import Success from './Success';

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Browse />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/registration',
      element: <Registration />,
    },
    {
      path: '/success',
      element: <Success />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

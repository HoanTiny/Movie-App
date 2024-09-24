import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Loading from '@components/Loading';
import { Suspense } from 'react';

function RootLayout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default RootLayout;

import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from 'components/Layout/Layout.module.css';

export const Layout = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <nav>
          <NavLink className={s.link} to="/">
            Home
          </NavLink>
          <NavLink className={s.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

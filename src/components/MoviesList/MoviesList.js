import PropTypes from 'prop-types';
import { Outlet, useLocation, Link } from 'react-router-dom';
import s from 'components/MoviesList/MoviesList.module.css';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={s.list}>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li className={s.item} key={id}>
              <Link
                className={s.link}
                to={`/movies/${id}`}
                state={{ from: location }}
              >
                <img
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500' + poster_path
                      : 'https://via.placeholder.com/960x240'
                  }
                  alt="movie"
                  width="250"
                />
                <p className={s.title}>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

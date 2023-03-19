import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { fetchSearchMovies } from 'api';
import s from 'pages/Movies/Movies.module.css';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { MovieList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMovies([]);
    setLoading(true);

    fetchSearchMovies(nameMovie)
      .then(resp => {
        // resp.results
        //   ? setMovies(resp.results)
        //   : toast.error('Better luck next time!');

        setMovies(resp.results);
        // if (!resp.length) {
        //   toast.error('Better luck next time!');
        // }
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [nameMovie]);

  const handleSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main className={s.main}>
      {error && <h2>{error.message}</h2>}
      <SearchBar onSubmit={handleSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
      <ToastContainer autoClose={2000} />
    </main>
  );
};
export default Movies;

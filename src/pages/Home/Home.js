import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'api';
import s from 'pages/Home/Home.module.css';
import { MovieList } from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies()
      .then(resp => {
        setMovies(resp.results);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className={s.wrapper}>
        <h1 className={s.title}>Trending today</h1>
        <MovieList movies={movies} />
        {loading && <Loader />}
      </div>
    </>
  );
};
export default Home;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'api';
import { CiImageOff } from 'react-icons/ci';
import s from 'components/Cast/Cast.module.css';

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(resp => {
      setMovieCast(resp.cast);
    });
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {movieCast.length > 0 ? (
        movieCast.map(({ id, profile_path, name, character }) => (
          <div className={s.container} key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={name}
                width={100}
              />
            ) : (
              <CiImageOff size={125} />
            )}
            <p>
              {' '}
              <b>{name}</b>{' '}
            </p>
            <p className={s.character}> Character: {character}</p>
          </div>
        ))
      ) : (
        <p>Sorry, there isn't any info</p>
      )}
    </div>
  );
};

export default Cast;

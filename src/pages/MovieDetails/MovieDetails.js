import { fetchMovieDetails } from 'api';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import s from 'pages/MovieDetails/MovieDetails.module.css';
import Loader from 'components/Loader/Loader';
import { Return } from 'components/Return/Return';
import { toast } from 'react-toastify';
import { fetchTrailerMovies } from 'api';
import YouTube from 'react-youtube';
import { GiExitDoor } from 'react-icons/gi';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? `/movie`;
  const [trailerId, setTrailerId] = useState(null);
  const [urlModal, setUrlModal] = useState(false);

  function handleFetchTrailer() {
    fetchTrailerMovies(movieId).then(videos => {
      const trailer = videos.find(video => video.type === 'Trailer');
      if (trailer) {
        setTrailerId(trailer.key);
        setUrlModal(true);
        document.body.style.overflow = 'hidden';
      } else {
        setUrlModal(false);
        toast.error('No trailer for this movie.');
      }
    });
  }

  useEffect(() => {
    fetchMovieDetails(movieId).then(resp => {
      setMovieDetail(resp);
    });
  }, [movieId]);

  useEffect(() => {
    window.addEventListener('keydown', clickKeyDown);

    return () => {
      window.removeEventListener('keydown', clickKeyDown);
    };
  });

  function closeModal() {
    setUrlModal(false);
    setTrailerId(null);
    document.body.style.overflow = 'auto';
  }

  const clickBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const clickKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const { poster_path, title, vote_average, overview, genres } = movieDetail;
  const score = ((vote_average * 10) / 10).toFixed(1);

  return (
    <>
      <Return to={backLinkHref} />
      <div>
        <div className={s.wrapper}>
          <div className={s.columnImg}>
            <img
              src={
                poster_path ? (
                  `https://image.tmdb.org/t/p/w500/${poster_path}`
                ) : (
                  <p></p>
                )
              }
              alt={title ? title : 'Movie without a title'}
              width={300}
              className={s.detalisImg}
              style={{ cursor: 'pointer' }}
              onClick={handleFetchTrailer}
            />
            {urlModal && trailerId ? (
              <div className={s.videoBackdrop} onClick={clickBackdrop}>
                <GiExitDoor className={s.iconBackModal} onClick={closeModal} />

                <YouTube
                  className={s.videoModal}
                  videoId={trailerId}
                  opts={{
                    width: '100%',
                    height: '100%',
                    playerVars: {
                      autoplay: 1,
                      controls: 1,
                      cc_load_policy: 0,
                      fs: 0,
                      iv_load_policy: 0,
                      modestbranding: 0,
                      rel: 0,
                      showinfo: 0,
                    },
                    origin: 'http://localhost:3000',
                  }}
                />
              </div>
            ) : (
              <p></p>
            )}
          </div>

          <div className={s.info}>
            <h1>{title}</h1>
            <p className={s.score}>
              User Score: <span>{score}</span>
            </p>
            <span>{overview}</span>
            <p className={s.genres}>Genres:</p>
            {genres && (
              <span>{genres.map(genre => genre.name).join(' || ')}</span>
            )}
          </div>
        </div>

        <ul className={s.list}>
          <li className={s.item}>
            <Link className={s.link} to="cast" state={{ ...location.state }}>
              Cast
            </Link>
          </li>
          <li className={s.item}>
            <Link className={s.link} to="reviews" state={{ ...location.state }}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetails;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'api';
import s from 'components/Reviews/Reviews.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(resp => {
      setMovieReview(resp.results);
    });
  }, [movieId]);

  return (
    <>
      {movieReviews ? (
        movieReviews.map(({ id, author, content }) => {
          return (
            <ul key={id}>
              <li className={s.item}>{author}</li>
              <p className={s.content}>{content}</p>
            </ul>
          );
        })
      ) : (
        <p>There is no review</p>
      )}
    </>
  );
};

export default Reviews;

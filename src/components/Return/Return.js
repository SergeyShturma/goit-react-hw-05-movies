import { Link } from 'react-router-dom';
import s from 'components/Return/Return.module.css';

export const Return = ({ to }) => {
  return (
    <Link to={to}>
      {' '}
      <button className={s.button} type="button">
        {' '}
        Return
      </button>{' '}
    </Link>
  );
};

import { useState } from 'react';
import s from 'components/SearchBar/SearchBar.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const queryChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast('Пустоту искать не очень интересно!');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  // const toastInfoDuplication = () => {
  //   return toast.info('You are already here!');
  // };

  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button type="submit" className={s.button}>
          <span className={s.button_label}>Search</span>
        </button>
        <input
          className={s.input}
          type="text"
          name="query"
          value={query}
          autoComplete="off"
          placeholder="Search movies"
          onChange={queryChange}
        />
      </form>
    </div>
  );
};

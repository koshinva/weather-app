import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';
import cn from 'classnames';

import styles from './Search.module.scss';
import { useState } from 'react';
import { useActions } from 'hooks/useActions';
import { useDebounce } from 'hooks/useDebounce';
import { useEffect } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { IGeocoding } from 'types';

interface ISearchProps {
  isOpenSearch: boolean;
}

const Search: FC<ISearchProps> = ({ isOpenSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { getGeocoding, selectGeocoding } = useActions();
  const { geocodingList } = useTypedSelector((state) => state.weather);

  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  const handleClickGeocoding = (geo: IGeocoding) => {    
    selectGeocoding(geo)
    setSearchTerm(`${geo.name}, ${geo.country}`)
  };

  useEffect(() => {
    if (!debouncedSearch.trim()) return;

    getGeocoding(debouncedSearch);
  }, [debouncedSearch, getGeocoding]);

  return (
    <form className={cn(styles.form, { [styles.active]: isOpenSearch })}>
      <button type="submit">
        <FaSearch />
      </button>
      <input
        className={styles.search}
        type="text"
        name="search"
        id="search"
        placeholder="Search city..."
        value={searchTerm}
        onChange={handleChangeSearchInput}
      />
      {geocodingList.length ? (
        <ul className={styles.list}>
          {geocodingList.map((geo) => (
            <li className={styles.item} key={geo.lat}>
              <button
                className={styles.button}
                type="button"
                onClick={() => handleClickGeocoding(geo)}
              >{`${geo.name}, ${geo.country}`}</button>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </form>
  );
};

export default Search;

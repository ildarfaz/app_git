import { FC } from 'react';
import styles from './search.module.scss';
import { ReactComponent as IconSearch } from '../../assets/img/search.svg';

interface ISearch {
  onSearch: (data: string) => void;
}

export const Search: FC<ISearch> = ({ onSearch }) => {

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  }

  return (
    <div className={styles.box}>
      <div className={styles.inner}>
        <input placeholder='Поиск' onChange={handlerChange} />
        <div className={styles.icon}>
          <IconSearch />
        </div>
      </div>
    </div>
  );
}
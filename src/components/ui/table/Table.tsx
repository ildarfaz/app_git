import { FC } from 'react'
import { Button } from '../button/Button'
import styles from './table.module.scss'
import { ReactComponent as IconDown } from '../../../assets/img/down.svg';
import { ITable, enumDirection } from '../../../types/common';

interface IHeadlines {
  id: string;
  login: string;
  url: string;
}
const headlines = { id: 'ID', login: 'Логин', url: 'URL' };

export const Table: FC<ITable> = ({ users, sort, onChangeSort }) => {

  const handlerSort = (headline: string) => {
    onChangeSort((prev) => ({
      column: headline,
      direction: prev.direction !== enumDirection.ASC ?
        enumDirection.ASC : enumDirection.DESC
    }));
  }

  const tableTh = Object.keys(headlines).map((headline, index) => {

    return (
      <th key={headline + index}>
        <Button onClick={() => handlerSort(headline)}>
          <>
            <span>{headlines[headline as keyof IHeadlines]}</span>
            {
              <IconDown className={sort.column === headline ?
                sort.direction !== enumDirection.ASC ? styles.iconUp : "" : ""} />}
          </>
        </Button>
      </th>
    )
  })

  const tableTd = users?.map(({ id, login, url }) => {

    return (
      <tr key={id}>
        <td>{id}
        </td>
        <td>{login}
        </td>
        <td>{url}
        </td>
      </tr>
    )
  });

  return (
    <div className={styles.box}>
      <table>
        <thead>
          <tr>
            {tableTh}
          </tr>
        </thead>
        {!users?.length ?
          <p>Не найдено!</p> :
          <tbody>
            {tableTd}
          </tbody>}
      </table>
    </div>
  )

}
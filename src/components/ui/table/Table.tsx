import { FC } from 'react';
import styles from './table.module.scss';
import { ITable } from '../../../types/common';

interface IHeadlines {
  id: string;
  login: string;
  url: string;
}

const headlines = { id: 'ID', login: 'Логин', url: 'URL' };

export const Table: FC<ITable> = ({ users }) => {



  const tableTh = Object.keys(headlines).map((headline, index) => {

    return (
      <th key={headline + index}>
        <span>{headlines[headline as keyof IHeadlines]}</span>
      </th>
    )
  })

  const tableTd = users?.length ? users.map(({ id, login, url }) => {

    return (
      <tr key={id}>
        <td>{id}
        </td>
        <td>{login}
        </td>
        <td><a href={url}>{url}</a>
        </td>
      </tr>
    )
  }) : <tr>
    <td colSpan={3}>Не найдено</td>
  </tr>
    ;

  return (
    <div className={styles.box}>
      <table>
        <thead>
          <tr>
            {tableTh}
          </tr>
        </thead>
        <tbody>
          {tableTd}
        </tbody>
      </table>
    </div>
  )

}
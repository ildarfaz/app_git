import { FC } from "react";
import { Table } from "../ui/table/Table";
import { IContent } from "../../types/common";
import { Pagination } from "../pagination/Pagination";
import styles from "./content.module.scss";

export const Content: FC<IContent> = ({ data, params, onChangeParams }) => {
  return (
    <div className={styles.box}>
      <Table
        users={data?.items}
        params={params}
        onChangeParams={onChangeParams}
      />
      <Pagination
        total={data?.total_count}
        activePage={params.page}
        onChangeParams={onChangeParams}
      />
    </div>
  );
};

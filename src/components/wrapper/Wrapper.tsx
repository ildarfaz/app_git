import { useState } from "react";
import { Search } from "../search/Search";
import styles from "./wrapper.module.scss";
import { enumDirection } from "../../types/common";
import { useGetUsersQuery } from "../../stores/api/searchApi";
import { Content } from "../content/Content";

export const Wrapper = () => {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState({ column: "id", direction: enumDirection.DESC });
    const { data, error, isLoading } = useGetUsersQuery({ query, page, sortColumn: sort.column, direction: sort.direction },
        { skip: !query });
    console.log(data, error, isLoading)
    const handlerSearch = (data: string) => {
        setQuery(data);
        setPage(1);
        console.log(query, page);
    }
    return <div className={styles.box}>
        <Search onSearch={handlerSearch} />

        {isLoading ? <p>Идет загрузка...</p> :
            <Content data={data} activePage={page} sort={sort} onChangePage={setPage} onChangeSort={setSort} />
        }

    </div>
}
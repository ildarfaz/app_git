import { useState } from "react";
import { Search } from "../search/Search";
import styles from "./wrapper.module.scss";
import { enumOrder } from "../../types/common";
import { useGetUsersQuery } from "../../stores/api/searchApi";
import { Content } from "../content/Content";
const initialParams = { sort: "id", order: enumOrder.DESC, query: "", page: 1 };
export const Wrapper = () => {
    const [params, setParams] = useState(initialParams);
    const { data, error, isLoading } = useGetUsersQuery({ ...params },
        { skip: !params.query });
    console.log(data, error, isLoading);
    const handlerSearch = (query: string) => {
        setParams((prev) => ({ ...prev, query }));
        console.log(params.query, params.page);
    }
    return <div className={styles.box}>
        <Search onSearch={handlerSearch} />

        {isLoading ? <p>Идет загрузка...</p> :
            params.query ? <Content data={data} params={params} onChangeParams={setParams} /> :
                <p>Введите поисковый запрос</p>
        }
    </div>
}
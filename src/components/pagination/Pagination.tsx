import { FC, useCallback, useMemo } from "react";
import { Button } from "../ui/button/Button";
import styles from "./pagination.module.scss";
import { IPagitation } from "../../types/common";



export const Pagination: FC<IPagitation> = ({ total = 0, activePage, onChangeParams }) => {
    const totalPage = Math.floor(total / 10);
    const pages = Array.from(Array(totalPage + 1).keys()).slice(activePage - 5 > 0 ? activePage - 5 : 1, activePage + 6);

    const handlerPages = useCallback((page: number) => {
        onChangeParams((prev) => ({ ...prev, page }));
    }, [onChangeParams]);

    const pagesList = useMemo(() => {
        return (
            <div className={styles.pages}>{pages.map((page, index) => {
                return <Button key={page + index}
                    onClick={() => handlerPages(page)} active={activePage === page} >{(page).toString()}</Button>
            })}</div>
        )
    }, [activePage, handlerPages, pages]);
    return <div className={styles.box}>
        <Button onClick={() => handlerPages(activePage - 1)} isDisabled={activePage === pages[0]}>{"Назад"}</Button>
        {pagesList}
        <Button onClick={() => handlerPages(activePage + 1)} isDisabled={activePage === totalPage}>{"Далее"}</Button>
    </div>
}
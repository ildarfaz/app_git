import { FC, useCallback, useMemo } from "react";
import { Button } from "../ui/button/Button";
import styles from "./pagination.module.scss";

interface IPagitation {
    total: number | undefined;
    activePage: number;
    onChangePage: (nowPage: number) => void;
}

export const Pagination: FC<IPagitation> = ({ total = 0, activePage, onChangePage }) => {
    const totalPage = Math.floor(total / 10);
    const pages = Array.from(Array(totalPage + 1).keys()).slice(activePage - 5 > 0 ? activePage - 5 : 1, activePage + 6);
    console.log(pages, activePage, totalPage);
    const handlerPages = useCallback((page: number) => {
        onChangePage(page);
    }, [onChangePage])
    const pagesList = useMemo(() => {
        return (
            <div className={styles.pages}>{pages.map((page, index) => {
                return <Button key={page + index}
                    onClick={() => handlerPages(page)} active={activePage === page} >{(page).toString()}</Button>
            })}</div>
        )
    }, [activePage, handlerPages, pages]);
    return <div className={styles.box}>
        <Button onClick={() => activePage !== pages[0] && handlerPages(activePage - 1)}>{"Назад"}</Button>
        {pagesList}
        <Button onClick={() => activePage !== totalPage && handlerPages(activePage + 1)} >{"Далее"}</Button>
    </div>
}
import { FC } from "react"
import { Table } from "../ui/table/Table"
import { IContent } from "../../types/common"
import { Pagination } from "../pagination/Pagination"

export const Content: FC<IContent> = ({  data, sort, activePage, onChangePage,  onChangeSort }) => {

    return (
        <div>
            <Table users = {data?.items ?? []} sort = {sort} onChangeSort = {onChangeSort}/>
            <Pagination total={data?.total_count} activePage={activePage} onChangePage={onChangePage} />
        </div>
    )
}
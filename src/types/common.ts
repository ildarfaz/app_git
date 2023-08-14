import { Dispatch, SetStateAction } from "react";
import { IUser, IUsers } from "./users";

export enum enumDirection {
    "ASC" = "asc", "DESC" = "desc"
}
export interface ISort {
    sort: {
        column: string;
        direction: enumDirection;
    },
    onChangeSort: Dispatch<SetStateAction<{ column: string; direction: enumDirection; }>>;
}

export interface IContent extends ISort {
    data: {
        items: IUser[],
        total_count: number
    },
    activePage: number;
    onChangePage: Dispatch<SetStateAction<number>>;

}

export interface ITable extends ISort, IUsers {

}
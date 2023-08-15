import { Dispatch, SetStateAction } from "react";
import { IUser, IUsers } from "./users";

export enum enumOrder {
    "ASC" = "asc", "DESC" = "desc"
}
export interface IParams {
    params: {
        sort: string;
        order: enumOrder;
        query: string;
        page: number;
    },
    onChangeParams: Dispatch<SetStateAction<{ sort: string; order: enumOrder; query: string; page: number; }>>;
}

export interface IContent extends IParams {
    data: {
        items: IUser[],
        total_count: number
    },
}
export interface ITable extends IParams, IUsers {

}
export interface IPagitation {
    total: number;
    activePage: number;
    onChangeParams: Dispatch<SetStateAction<{ sort: string; order: enumOrder; query: string; page: number; }>>;
}
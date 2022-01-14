import { IProduct } from "./Product";

export interface FetchData {
    items: Array<IProduct>;
    page: number;
    perPage: number;
    totalItems: number;
}

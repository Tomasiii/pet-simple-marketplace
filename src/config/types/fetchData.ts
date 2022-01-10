import { IProduct } from "./product";

export interface FetchData {
    items: Array<IProduct>;
    page: number;
    perPage: number;
    totalItems: number;
}

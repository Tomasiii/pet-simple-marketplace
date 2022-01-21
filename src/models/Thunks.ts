import { IProduct } from "./Product";
import { IHistoryBodyArr } from "./History";

export interface FetchProductData {
    items: Array<IProduct>;
    page: number;
    perPage: number;
    totalItems: number;
}

export interface FetchHistoryData {
    items: IHistoryBodyArr;
}

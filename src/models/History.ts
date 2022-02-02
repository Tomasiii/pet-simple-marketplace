import { IProduct } from "./Product";

export interface IHistory {
    history: null | IHistoryBodyArr;
    process: "loading" | "idle" | "error";
}

export type IHistoryBodyArr = Array<IHistoryBody>;

export interface IHistoryBody {
    id: string;
    pieces: IHistoryBodyPieces;
    createdAt: string;
}

export type IHistoryBodyPieces = Array<{
    product: IProduct;
    count: number;
}>;

export interface ISort {
    origins: string;
    perPage: number | null;
    totalItems: number | null;
    maxPrice: number | null;
    minPrice: number;
    page: number | null;
    editable: boolean | null;
}

export interface IProduct {
    id: string;
    name: string;
    price: number;
    origin: string;
    createdAt: string;
    updatedAt: string;
    isEditable: boolean;
    count: number;
}

export interface EntityBase {
    ids: Array<string>;
    entities: { [key: string]: IProduct };
}

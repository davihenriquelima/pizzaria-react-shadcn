import { Size } from "./Product";

export type SizedProduct = {
    id: number,
    category: string,
    name: string,
    image: string,
    size: Size
}

export type Cart = {
    product: SizedProduct;
    quantity: number;
}
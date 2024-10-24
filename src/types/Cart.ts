import { Size } from "./Product";

export type SizedProduct = {
    id: string,
    category: string,
    name: string,
    image: string,
    size: Size
}

export type Cart = {
    product: SizedProduct;
    quantity: number;
}
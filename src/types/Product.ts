export type Size = {
    size:string
    price:number
}

export type Product = {
    id: number,
    category: string,
    name: string,
    image: string,
    sizes: Size[]
}
import { Product } from "@/types/Product";

export const products: Product[] = [
    {
        id: 1,
        category: 'pizzas',
        name: 'Calabresa',
        image: '/images/pizzas/calabresa.png',
        sizes: [
            {size:'p', price:19.99},
            {size:'m', price:27.99},
            {size:'g', price:35.99},
        ]
    },
    {
        id: 2,
        category: 'pizzas',
        name: 'Marguerita',
        image: '/images/pizzas/marguerita.png',
        sizes: [
            {size:'p', price:21.99},
            {size:'m', price:29.99},
            {size:'g', price:37.99},
        ]
    },
    {
        id: 3,
        category: 'pizzas',
        name: '4 queijos',
        image: '/images/pizzas/4queijos.png',
        sizes: [
            {size:'p', price:23.99},
            {size:'m', price:31.99},
            {size:'g', price:39.99},
        ]
    },
    {
        id: 4,
        category: 'bebidas',
        name: 'Antarctica',
        image: '/images/bebidas/.png',
        sizes: [
            {size:'350ml', price:5.99},
            {size:'1l', price:7.99},
            {size:'2l', price:10.99},
        ]
    },
    {
        id: 4,
        category: 'bebidas',
        name: 'Coca-Cola',
        image: '/images/bebidas/.png',
        sizes: [
            {size:'350ml', price:6.99},
            {size:'1l', price:8.99},
            {size:'2l', price:12.99},
        ]
    },
];
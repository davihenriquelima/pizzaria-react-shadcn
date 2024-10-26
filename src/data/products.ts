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
        category: 'pizzas',
        name: 'Manjericão',
        image: '/images/pizzas/manjericao.png',
        sizes: [
            {size:'p', price:17.99},
            {size:'m', price:24.99},
            {size:'g', price:29.99},
        ]
    },
    {
        id: 5,
        category: 'pizzas',
        name: 'Portuguesa',
        image: '/images/pizzas/portuguesa.png',
        sizes: [
            {size:'p', price:22.99},
            {size:'m', price:30.99},
            {size:'g', price:39.99},
        ]
    },
    {
        id: 6,
        category: 'coxinhas',
        name: 'Calabresa com Catupiry',
        image: '/images/coxinhas/calabresa-catupiry.png',
        sizes: [
            {size:'p', price:0.99},
            {size:'m', price:7.99},
            {size:'g', price:12.99},
        ]
    },
    {
        id: 7,
        category: 'coxinhas',
        name: 'Frango',
        image: '/images/coxinhas/frango.png',
        sizes: [
            {size:'p', price:0.70},
            {size:'m', price:6.99},
            {size:'g', price:11.99},
        ]
    },
    {
        id: 8,
        category: 'coxinhas',
        name: 'Carne',
        image: '/images/coxinhas/carne.png',
        sizes: [
            {size:'p', price:1.59},
            {size:'m', price:8.99},
            {size:'g', price:13.99},
        ]
    },
    {
        id: 9,
        category: 'refrigerantes',
        name: 'Antarctica',
        image: '/images/refrigerantes/antarcticasizes.png',
        sizes: [
            {size:'350ml', price:5.99},
            {size:'1l', price:7.99},
            {size:'2l', price:10.99},
        ]
    },
    {
        id: 10,
        category: 'refrigerantes',
        name: 'Coca-Cola',
        image: '/images/refrigerantes/cocasizes.png',
        sizes: [
            {size:'350ml', price:6.99},
            {size:'1l', price:8.99},
            {size:'2l', price:12.99},
        ]
    },
];
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { getAllProducts } from "@/services/product"
import { Product } from "@/types/Product";
import { ProductEmpty } from "./Empty";
import { ProductItem } from "./Item";

type Tab = {
    title:string,
    value: string,
    products: Product[]
}

export const ProductsTab = async () => {
    const products = await getAllProducts();

    const tabs: Tab[] = [
        {
            title:'Pizzas',
            value: 'pizzas',
            products: products.filter(item => item.category === 'pizzas')
        },
        {
            title: 'Coxinhas',
            value: 'coxinhas',
            products: products.filter(item => item.category === 'coxinhas')
        },
        {
            title: 'Refrigerantes',
            value: 'refrigerantes',
            products: products.filter(item => item.category === 'refrigerantes')
        },
        {
            title: 'Combos',
            value: 'combos',
            products: products.filter(item => item.category === 'combos')
        }
    ];

    return (
        <Tabs defaultValue="pizzas">
            <TabsList className="flex">
                {tabs.map(item => (
                    <TabsTrigger 
                        key={item.value} 
                        value={item.value} 
                        className="flex-1"
                    >
                        {item.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {tabs.map(item => (
                <TabsContent value={item.value} className="mt-6 min-h-screen">
                    {item.products.length > 0 &&

                        <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
                            {item.products.map(product => (
                                <ProductItem key={product.id} item={product}/>
                            ))}
                        </div>
                    }
                    {item.products.length === 0 && <ProductEmpty/>}
                </TabsContent>
            ))}
        </Tabs>
    )
}
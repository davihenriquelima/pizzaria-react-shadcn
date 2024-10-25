"use client";

import { Product, Size } from "@/types/Product"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";
import { useCartStore } from "@/stores/cart-store";
import { useEffect, useRef, useState } from "react";
import { SizedProduct } from "@/types/Cart";

type Props = {
    item:Product
}

export const ProductItem = ({item}:Props)=> {
    const { toast } = useToast();
    const { upsertCartItem } = useCartStore(state => state);
    const [ selectedSize, setSelectedSize ] = useState<Size>({size:'', price:0});
    const tabsRef = useRef<HTMLDivElement>(null);

    useEffect(()=> {
        const triggersList = tabsRef.current?.querySelectorAll('button')

        const activeTrigger = () => triggersList ? Array.from(triggersList).find(button => button.getAttribute('aria-selected') === 'true') : null;

        const verifySize = () => {
            const triggerValue = activeTrigger()?.innerHTML;
            if (triggerValue) {
                const foundSize = item.sizes.find(size => size.size === triggerValue);
                return foundSize ? foundSize : { size: 'default', price: 0 };
            }
            return { size: '', price: 0 };
        };

        setSelectedSize(verifySize())
    }, [item.sizes])

    const handleAddButton = ()=> {

        const SizedItem:SizedProduct = {
            name: item.name,
            id: item.id + selectedSize.size,
            category: item.category,
            image: item.image,
            size: selectedSize
        };

        upsertCartItem(SizedItem, 1);
        toast({
            title:'Item adicionado ao carrinho',
            description: `${item.category.toLowerCase().endsWith('s') ? item.category.charAt(0).toUpperCase() + item.category.slice(1,-1) : item.category.charAt(0).toUpperCase() + item.category.slice(1)} ${item.name} TAM ${selectedSize.size.toUpperCase()}`,
            action: <ToastAction altText="fechar">Fechar</ToastAction>
        });
    }

    return (
        <div>
            <div className="rounded-md">
                <img src={item.image} alt={item.name} className="w-full h-36 object-contain"/>
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p>{item.name}</p>
                <Tabs defaultValue={item.sizes[0].size} ref={tabsRef}>
                    <TabsList className="flex mt-2">
                        {item.sizes.map(size => (
                            <TabsTrigger
                                key={size.size} 
                                value={size.size}
                                onClick={()=>setSelectedSize(size)}
                                className="flex-1"
                            >
                                {size.size}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {item.sizes.map(size => (
                        <TabsContent value={size.size} className="mt-3" key={size.size}>
                            {size.size.length > 0 &&
                                <div className="w-full ">
                                    <p className="italic font-serif text-2xl">R${size.price.toFixed(2)}</p>
                                </div>
                            }
                        </TabsContent>  
                    ))}
                </Tabs>
                <Button className="mt-2" onClick={handleAddButton}>Adicionar</Button>
            </div>
        </div>
    )
}
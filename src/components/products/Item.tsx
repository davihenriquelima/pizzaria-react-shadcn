"use client";

import { Product } from "@/types/Product"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/hooks/use-toast";

type Props = {
    item:Product
}

export const ProductItem = ({item}:Props)=> {
    const { toast } = useToast();

    const handleAddButton = ()=> {
        // adiciona o item no store
        toast({
            title:'Item adicionado ao carrinho',
            description: item.name,
            action: <ToastAction altText="fechar">Fechar</ToastAction>
        })
    }

    return (
        <div>
            <div className="rounded-md">
                <img src={item.image} alt={item.name} className="w-full h-36 object-contain"/>
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p>{item.name}</p>
                <Tabs defaultValue={item.sizes[0].size}>
                    <TabsList className="flex mt-2">
                        {item.sizes.map(size => (
                            <TabsTrigger key={size.size} value={size.size} className="flex-1">{size.size}</TabsTrigger>
                        ))}
                    </TabsList>
                    {item.sizes.map(obj => (
                        <TabsContent value={obj.size} className="mt-3" key={obj.size}>
                            {obj.size.length > 0 &&
                                <div className="w-full ">
                                    <p className="italic font-serif text-2xl">R${obj.price.toFixed(2)}</p>
                                </div>
                            }
                        </TabsContent>  
                    ))}
                </Tabs>
                <Button className="mt-2">Adicionar</Button>
            </div>
        </div>
    )
}
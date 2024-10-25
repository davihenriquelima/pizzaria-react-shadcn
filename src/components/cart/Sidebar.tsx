"use client";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores/cart-store";
import { CartItem } from "@/components/cart/Item";
import { useState } from "react";
import { CheckoutDialog } from "@/components/checkout/Dialog";

export const CartSidebar = () => {
    const { cart } = useCartStore(state => state);
    const [ checkoutOpen, setCheckoutOpen] = useState(false);

    let subtotal = 0; 
    for (let item of cart) {
        let itemPrice = item.product.size.price;
        subtotal += item.quantity * itemPrice;
    }

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="relative">
                    <RocketIcon className="mr-2"/>
                    <p>carrinho</p>
                    {cart.length > 0 &&
                        <div className="flex absolute right-[-2px] top-[-2px] size-4 p-2 rounded-full bg-white text-red-600 text-center items-center justify-center border border-red-600/15">{cart.length}</div>
                    }
                </Button>
            </SheetTrigger>
            <SheetContent className="min-w-[500px] xs:w-[540px]">
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5">
                    {cart.map(item => (
                        <CartItem  key={item.product.id} item={item}/>
                    ))}
                </div>

                <Separator className="my-4"/>

                <div className="flex justify-between items-center text-sm">
                    <div>Subtotal:</div>
                    <div>R${subtotal.toFixed(2)}</div>
                </div>

                <Separator className="my-4"/>

                <div className="text-center">
                    <Button 
                        disabled={cart.length === 0}
                        onClick={()=>setCheckoutOpen(true)}
                    >Finalizar Compra</Button>
                </div>

                <CheckoutDialog 
                    open={checkoutOpen}
                    onOpenChange={setCheckoutOpen}
                />

            </SheetContent>
        </Sheet>
    )
}
import { Cart } from "@/types/Cart";
import { useCartStore } from "../stores/cart-store";
import { Button } from "../ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";

type Props = {
    cartItem:Cart;
}

export const CartItemQuantity = ({cartItem}:Props) => {
    const { upsertCartItem } = useCartStore(state=>state)

    const handleMinus = () => {
        upsertCartItem(cartItem.product, -1);
    }

    const handlePlus = () => {
        upsertCartItem(cartItem.product, 1);
    }

    return (
        <div className="flex items-center gap-2">
            <Button
                onClick={handleMinus}
                variant="outline"
                size="icon"
                className="size-5"  
            >
                <MinusIcon className="size-3"/>
            </Button>
            <div className="text-xs">{cartItem.quantity}</div>
            <Button
                onClick={handlePlus}
                variant="outline"
                size="icon"
                className="size-5"  
            >
                <PlusIcon className="size-3"/>
            </Button>
        </div>
    )
}
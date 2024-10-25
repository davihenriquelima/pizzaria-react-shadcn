import { Cart } from "@/types/Cart";
import { CartItemQuantity } from "@/components/cart/ItemQuantity";

type Props = {
    item: Cart;
}

export const CartItem = ({item}:Props) => {
    return (
        <div className="flex items-center gap-5">
            <div className="w-12">
                <img src={item.product.image} className="w-full h-auto object-contain" alt={item.product.name}/>
            </div>
            <div>
                <p className="text-md">
                    {`${item.product.category.toLowerCase().endsWith('s') ? item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1,-1) : item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1)} ${item.product.name} - ${item.product.size.size.toUpperCase()}`}
                </p>
                <p className="text-xs opacity-45">
                    R${item.product.size.price}
                </p>
            </div>
            <div className="ml-auto">
                <CartItemQuantity cartItem={item}/>
            </div>
        </div>
    )
}
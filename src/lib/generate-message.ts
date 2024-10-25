import { useCartStore } from "@/stores/cart-store";
import { useCheckouStore } from "@/stores/checkout-store"

export const generateMessage = () => {
    const {name, address} = useCheckouStore(state=> state)
    const {cart} = useCartStore(state => state);

    const orderProducts = cart.map(item => {

        const categoryFormatted = item.product.category.toLowerCase().endsWith('s')
            ? item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1, -1)
            : item.product.category.charAt(0).toUpperCase() + item.product.category.slice(1);

        return `${item.quantity}x ${categoryFormatted} ${item.product.name}`;
    });

    return `*Dados do Cliente:*
Name: ${name}
Endereço: ${address.street}, ${address.number} (${address.complement})
${address.district}, ${address.city}/${address.state}
-------
*Pedido:*
${orderProducts.join('\n')}`;
}
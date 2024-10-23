import { Cart } from '@/types/Cart';
import { SizedProduct } from '@/types/Cart';
import { create } from 'zustand';

type States = {
    cart: Cart[]
}

type Actions = {
    upsertCartItem:(product:SizedProduct, quantity:number)=>void
}

const initialState: States = {
    cart:[]
}

export const useCartStore = create<States & Actions>()(set => ({
    ...initialState, 
    upsertCartItem: (product, quantity) => set(state => {
        let newCart = state.cart;
        
        let productIndex = newCart.findIndex((item => item.product.id === product.id))
       
        if(productIndex < 0) { // não tem no carrinho
            newCart.push({product, quantity:0}); // adiciona um produto sem quantidade
            productIndex = newCart.findIndex(item => item.product.id === product.id) //atualiza o index com item que acabamos de criar
        }

        newCart[productIndex].quantity += quantity;

        if( newCart[productIndex].quantity <= 0) {
            newCart = newCart.filter(item => item.product.id !== product.id)
        }

        return {...state, cart: newCart}
    })
}));
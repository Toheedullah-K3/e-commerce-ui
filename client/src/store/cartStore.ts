import { CartStoreActionsType, CartStoreStateType } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const useCartStore = create<CartStoreStateType & CartStoreActionsType>()(
    persist(
        (set) => ({
            cart: [],
            addToCart: (product) => {
                set((state) => {
                    const existingProductIndex = state.cart.findIndex((p =>
                        p.id === product.id &&
                        p.selectedSize === product.selectedSize &&
                        p.selectedColor === product.selectedColor
                    ))
                    if (existingProductIndex !== -1) {
                        const updatedCart = [...state.cart]
                        updatedCart[existingProductIndex].quantity += product.quantity || 1
                        return { cart: updatedCart }
                    }
                    return { cart: [...state.cart, product] }
                })
            },
            removeFromCart: (product) => {
                set((state) => ({ cart: state.cart.filter((p) => (p.id !== product.id)) }))
            },
            clearCart: () => {
                set({ cart: [] })
            },
        }),
        {
            name: "cart",
            storage: createJSONStorage(() => localStorage),
        }
    )
)


export default useCartStore
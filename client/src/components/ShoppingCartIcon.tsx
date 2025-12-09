import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ShoppingCartIcon() {
    return (
        <div>
            <Link href="/cart" className="relative">
                <ShoppingCart className='w-4 h-4 text-gray-500' />
                <span className="absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center text-xs font-medium">
                    1
                </span>
            </Link>


        </div>
    )
}

export default ShoppingCartIcon

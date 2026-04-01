import React from 'react';
import CartCard from './cartCard';

const Cart = ({carts}) => {
    return (
        <div className='container mx-auto bg-base-200 mb-20 p-10 rounded-lg'>
            <h1 className='text-[24px] font-semibold'>Your Cart</h1>

        {
            carts.map(cart =>{
                return(
                    <CartCard cart={cart}></CartCard>
                )
            })
        }

            <div className='flex justify-between items-center'>
                <p>Total:</p>
                <h1 className='text-[24px] font-semibold'>$</h1>
            </div>
            <div className="mt-6">
            <button className="btn bg-gradient-to-r from-[#536DFE] to-[#7E57C2] text-white btn-block rounded-full">Proceed to Checkout</button>
            </div>
           
        </div>
    );
};

export default Cart;
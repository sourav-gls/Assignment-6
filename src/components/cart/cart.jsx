import React from 'react';
import CartCard from './cartCard';
import { toast } from 'react-toastify';

const Cart = ({carts , setCarts}) => {

const totalPrice = carts.reduce((sum,item) => sum + item.price , 0)
const handleProcess = () => {
    setCarts([ ])
    {carts.length === 0? toast("Opps ! Your cart is EMPTY") : toast("Payment successfull ! Thank You ...")}
    
}

const handleDelete = (cart) =>{
    const filteredArray = carts.filter(item => item.id!== cart.id);
    setCarts(filteredArray)
}

    return (
        <div className='container mx-auto bg-base-200 mb-20 p-10 rounded-lg'>
            <h1 className='text-[24px] font-semibold'>Your Cart</h1>

            {
                carts.length === 0 ? <div className='bg-purple-100 p-20 text-center mt-4 rounded-lg mb-4'><p className='text-[30px] font-semibold'> Your cart is Empty.</p></div> :

                  carts.map(cart =>{
                return(
                    <CartCard cart={cart} handleDelete={handleDelete}></CartCard>
                )
            })

            }

        
          
        

            <div className='flex justify-between items-center'>
                <p>Total:</p>
                <h1 className='text-[26px] font-bold'>${totalPrice}</h1>
            </div>
            <div className="mt-6">
            <button onClick={handleProcess} className="btn bg-gradient-to-r from-[#536DFE] to-[#7E57C2] text-white btn-block rounded-full">Proceed to Checkout</button>
            </div>
           
        </div>
    );
};

export default Cart;
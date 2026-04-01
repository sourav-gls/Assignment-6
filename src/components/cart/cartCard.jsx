import React from 'react';
import * as Icons from "lucide-react";

const CartCard = ({cart}) => {

const Icon = Icons[cart.icon];

    return (
        <div className='flex justify-between items-center mb-5 mt-5 bg-base-300 p-4 rounded-lg'>
        <div className='flex gap-3'>
            <div className='bg-purple-200 rounded-full w-13 h-13 flex items-center justify-center '><Icon size={32} className="text-indigo-500 " /></div>
            <div>
                <h1 className='text-[18px] font-semibold'>{cart.name}</h1>
                <h4>${cart.price}</h4>
            </div>
        </div>
        <button className='text-red-400 font-semibold'>Remove</button>
        </div>
    );
};

export default CartCard;
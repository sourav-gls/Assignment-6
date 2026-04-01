import React, { useState } from 'react';
import * as Icons from "lucide-react";
import { toast } from 'react-toastify';

const ModelCard = ({model ,carts ,setCarts}) => {

    const [isBuy , setIsBuy]= useState(false) ;
    const Icon = Icons[model.icon];

    const handleBuy =() =>{
        setIsBuy(true)
        setCarts([...carts, model])
        toast(`${model.name} is added in cart`)
    }
    
    
    return (
        
                
        <>  
                
                
                <div className='space-y-2.5 border-2 border-gray-200 p-6 rounded-2xl'>
                    <div className='flex justify-between'>
                 <div className='bg-purple-100 rounded-full w-13 h-13 flex items-center justify-center '><Icon size={32} className="text-indigo-500 " /></div>
                 <div className="badge badge-soft badge-primary w-22">{model.tag}</div>
                   </div>
                 <h1 className='text-[24px] font-semibold'>{model.name}</h1>
                 <p className='text-gray-400'>{model.description}</p>
                 <p className='text-gray-400'><span className='text-[24px] font-semibold text-black'>${model.price}</span>/{model.period === "monthly" ? "Month" : "One-Time"}</p>
                 <ul>
                  {model.features.map(feature => {
                    return(
                          <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className='text-gray-400'>{feature}</span>
                    </li>
                    )
                  })}

                 </ul>
                 

                 <div className="mt-6">
                   <button onClick={handleBuy} className="btn bg-gradient-to-r from-[#536DFE] to-[#7E57C2] text-white btn-block rounded-full">Buy Now</button>
                 </div>
                 </div>
                

                

      </>        
           
    );
};

export default ModelCard;
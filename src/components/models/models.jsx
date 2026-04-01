
import React, { use } from 'react';
import * as Icons from "lucide-react";


const Models = ({modelPromise}) => {
    const models = use(modelPromise);
    console.log(models)
    return (
        <div className='container mx-auto mt-20 mb-20'>
           <div className='text-center space-y-2 mb-5'>
            <h1 className='text-[48px] font-semibold'>Premium Digital Tools</h1>
            <p className='text-gray-400'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
           </div>
           <div role="tablist" className="tabs flex items-center justify-center">
         <a role="tab" className="tab tab-active ">Tab 1</a>
         <a role="tab" className="tab">Tab 3</a>
          </div>
           
           <div className='grid grid-cols-3 gap-20'>
            {models.map((model) => {
                const Icon = Icons[model.icon];
                return(
                <div>
                 <div className='bg-purple-100 rounded-full w-13 h-13 flex items-center justify-center '><Icon size={32} className="text-indigo-500 " /></div>

                 <h1 className='text-[24px] font-semibold'>{model.name}</h1>
                 <p className='text-gray-400'>{model.description}</p>
                 <p className='text-gray-400'><span className='text-[24px] font-semibold text-black'>${model.price}</span>/{model.period === "monthly" ? "Month" : "One-Time"}</p>
                 <ul>
                    <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span className='text-gray-400'>Basic templates</span>
                    </li>

                 </ul>
                 <div className="mt-6">
                   <button className="btn bg-gradient-to-r from-[#536DFE] to-[#7E57C2] text-white btn-block rounded-full">Buy Now</button>
                 </div>
                 </div>
                );
})}
                

            
           </div>
        </div>
    );
};

export default Models;
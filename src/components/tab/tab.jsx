import React from 'react';

const Tab = ({setActiveTab , activeTab , carts}) => {
    const cartTab = carts.length === 0 ? "Cart" : `Cart(${carts.length})`
    return (
        <div className='container mx-auto mt-20 mb-20'>
           <div className='text-center space-y-2 mb-5'>
            <h1 className='text-[48px] font-semibold'>Premium Digital Tools</h1>
            <p className='text-gray-400'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
           </div>
           
<div className="tabs tabs-box bg-white border-none shadow-none justify-center">
  <input type="radio" name="my_tabs_1" className= {`tab rounded-full w-40 ${activeTab==="products" ? " bg-gradient-to-r from-[#536DFE] to-[#7E57C2] text-white font-semibold" : null }`} aria-label="Products" defaultChecked onClick={()=>setActiveTab("products")} />
  <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab==="cart" ? " bg-gradient-to-r from-[#536DFE] to-[#7E57C2] text-white font-semibold" : null }`} aria-label={cartTab} onClick={()=>setActiveTab("cart")} />
  
</div>
</div>
    );
};

export default Tab;
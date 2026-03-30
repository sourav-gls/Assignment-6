import React from 'react';

const Count = () => {
    return (
        <div className='bg-gradient-to-r from-[#536DFE] to-[#7E57C2]'>
            <div className='flex justify-center gap-50 p-10'>
                <div className=''>
                  <h1 className='text-[55px] text-white font-semibold'>50K+</h1> 
                  <p className='text-[24px] text-white '>Active Users</p> 
                </div>
                <div>
                  <h1 className='text-[55px] text-white font-semibold'>200+</h1> 
                  <p className='text-[24px] text-white '>Premium Tools</p>
                </div>
                <div>
                  <h1 className='text-[55px] text-white font-semibold'>4.9</h1> 
                  <p className='text-[24px] text-white '>Rating</p> 
                </div>
            </div>
            
        </div>
    );
};

export default Count;
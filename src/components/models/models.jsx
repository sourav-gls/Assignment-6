
import React, { use } from 'react';

import ModelCard from './modelCard';


const Models = ({modelPromise , setCarts ,carts}) => {
    const models = use(modelPromise);
    
    return (
       
<div className='container mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-20 ml-5 mr-5'>
            {models.map((model) => {
                return(
                <ModelCard key={model.id} model={model} setCarts={setCarts} carts={carts}></ModelCard>
                )
            })}
           </div> 
         
        </div>
    );
};

export default Models;
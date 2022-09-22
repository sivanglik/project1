import React, { useEffect, useState } from 'react'
import data from '../data.json'
import Product from './Product'
function ProductsComp({date}) {

  const [products,setproducts] = useState(data.data)
  const startDate = new Date()

    
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-20'>
        {
          products.map(item=>{
            return <Product key={item.id} name={item.name} price={item.price} 
                    available={item.times.available_days_of_week} selectedDate={date} 
                    makeDays={item.times.makeDays} excludeDates={item.times.excludeDates}  />
          })
        }
    </div>
  )
}

export default ProductsComp
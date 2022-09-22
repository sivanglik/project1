import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ProductsComp from './ProductsComp'
function DatePickerComp() {


    const [selectedDate,setselectedDate] = useState(new Date());
    
  return (
    <>
     <div >
        <DatePicker
              className='mt-20  p-2 text-center bg-red-300 outline-0'
              selected={ selectedDate}
              onChange={ (date) => setselectedDate(date) }
              dateFormat='yyyy/MM/dd'
              minDate={new Date()}
              maxDate={new Date(Date.now() + 12096e5)}
              popperPlacement="bottom"
              
            />
     </div>
          
        
      <ProductsComp date={selectedDate}/>
    </>
    
  )
}

export default DatePickerComp
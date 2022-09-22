import React, { useState,useEffect } from 'react'

function Product({name,price,available,selectedDate,makeDays,excludeDates}) {
 
   var newDate = JSON.stringify(selectedDate).slice(1, 11); 
   const[diffDates,setdiffDates] = useState()
   const [prevDate,setprevDate] = useState(selectedDate)
   const [isDayAvailable,setisDayAvailable] = useState(true)
   const [isexcludeDates,setisexcludeDates] = useState()
      
   useEffect(() => {

        setisexcludeDates(true)

       // Check Diff between TWO Dates
       let diff = Math.abs(new Date(newDate).getTime() - new Date(prevDate).getTime());
       setdiffDates(diff / (1000 * 3600 * 24))
       setprevDate(newDate)

       // Check if Day Available
        let result = available.some(day=>{
          return day == (selectedDate.getDay() + 1)
        })
        setisDayAvailable(result)
        
        // check exclude dates
        excludeDates.map( item=>{
          if(new Date(JSON.stringify(item.date).slice(1,11)).getTime() === new Date(newDate).getTime()){
              setisexcludeDates(false)
          }
        })
            
   }, [selectedDate])
   
  return (
    
    isexcludeDates && (diffDates >= makeDays) && isDayAvailable ? <div className="max-w-sm rounded overflow-hidden shadow-lg ">
  
        <div className="px-6 py-6 ">
          <div className="font-bold text-xl text-center ">{name}</div>
          
          <div className="font-bold text-md text-center mt-2 ">Price :  {price} </div>
          
        </div>
  
      </div> : null
  )   
}

export default Product
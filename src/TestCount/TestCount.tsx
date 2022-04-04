import {useEffect, useState} from "react";

export const TestCount = () => {

   const [value, setValue] = useState<number>(0)

   const incHandler = () => {
      setValue(value + 1)
   }

   useEffect(() => {
      let valueAsString = localStorage.getItem('counterValue')
      if (valueAsString) {
         let newValue = JSON.parse(valueAsString)
         setValue(newValue)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('counterValue', JSON.stringify(value))
   }, [value])

   return (
      <div>
         <h1>{value}</h1>
         <button onClick={incHandler}>inc</button>
      </div>
   );
};
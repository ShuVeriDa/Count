import {useState} from "react";

export const TestCount = () => {

   const [value, setValue] = useState<number>(0)

   const incHandler = () => {
      setValue(value + 1)
   }

   const setToLocalStorageHandler = () => {
      localStorage.setItem('counterValue', JSON.stringify(value))
      localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
   }

   const getFromLocalHandler = () => {
      let valueAsString = localStorage.getItem('counterValue')
      if (valueAsString) {
         let newValue = JSON.parse(valueAsString)
         setValue(newValue)
      }
   }

   const clearLocalStorageHandler = () => {
      localStorage.clear()
      setValue(0)
   }

   const removeItemFromLocalStorageHandler = () => {
      localStorage.removeItem('counterValue + 1')
   }

   return (
      <div>
         <h1>{value}</h1>
         <button onClick={incHandler}>inc</button>
         <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
         <button onClick={getFromLocalHandler}>GetFromLocalStorage</button>
         <button onClick={clearLocalStorageHandler}>clearLocalStorageHandler</button>
         <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorageHandler</button>
      </div>
   );
};
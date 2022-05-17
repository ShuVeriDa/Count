import React, {useEffect, useState} from 'react';
import classes from './App.module.css';
import {Counter} from "./components/Counter";
import {CounterConfig} from "./components/CounterConfig";

function App() {
   const [counter, setCounter] = useState<number>(0)
   const [maxValue, setMaxValue] = useState<number>(5)
   const [startValue, setStartValue] = useState<number>(0)
   const [disabledBtnSet, setDisabledBtnSet] = useState<boolean>(true)
   const [changeValues, setChangeValues] = useState<boolean>(false)

   const inc = () => setCounter(counter + 1)
   const res = () => setCounter(startValue)
   const set = () => {
      setCounter(startValue)
      setDisabledBtnSet(true)
      setChangeValues(false)
   }

   useEffect(() => {
      let maxValue = localStorage.getItem('maxValue')
      let startValue = localStorage.getItem('startValue')

      if (maxValue) {
         let newMaxValue = JSON.parse(maxValue)
         setMaxValue(newMaxValue)

      }
      if (startValue) {
         let newStartValue = JSON.parse(startValue)
         setStartValue(newStartValue)
         setCounter(newStartValue)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('maxValue', JSON.stringify(maxValue))
      localStorage.setItem('startValue', JSON.stringify(startValue))
   }, [maxValue, startValue])


   return (
      <div className={classes.App}>
         <CounterConfig maxValue={maxValue}
                        setMaxValue={setMaxValue}
                        startValue={startValue}
                        setStartValue={setStartValue}
                        setValue={set}
                        disabledBtnSet={disabledBtnSet}
                        setDisabledBtnSet={setDisabledBtnSet}
                        setChangeValues={setChangeValues}
         />
         <Counter counter={counter}
                  setCounter={setCounter}
                  inc={inc}
                  res={res}
                  maxValue={maxValue}
                  startValue={startValue}
                  changeValues={changeValues}
         />
         {/*<TestCount />*/}
      </div>
   );
}

export default App;

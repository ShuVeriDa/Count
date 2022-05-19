import React, { useState} from 'react';
import classes from '../App.module.css';
import {CounterConfig} from "./components/CounterConfig";
import {Counter} from "./components/Counter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./store/store";
import {
   incValueAC,
   maxValueAC,
   resValueAC, setValueAC,
   startValueAC
} from "./store/counterReducer";


function AppWithRedux() {
   const counterValue = useSelector<AppStateType, number>(state => state.counter.counterValue)
   const startValue = useSelector<AppStateType, number>(state => state.counter.startValue)
   const maxValue = useSelector<AppStateType, number>(state => state.counter.maxValue)

   const dispatch = useDispatch()

   const [disabledBtnSet, setDisabledBtnSet] = useState<boolean>(true)
   const [changeValues, setChangeValues] = useState<boolean>(false)

   const inc = () => {
      dispatch(incValueAC())
   }
   const res = () => dispatch(resValueAC(startValue))
   const set = () => {
      dispatch(setValueAC(startValue))
      setDisabledBtnSet(true)
      setChangeValues(false)
   }

   const setMaxValue = (maxValue: string) => {
      dispatch(maxValueAC(JSON.parse(maxValue)))
   }

   const setStartValue = (startValue: string) => {
      dispatch(startValueAC(JSON.parse(startValue)))
   }

   return (
      <div className={classes.App}>
         <CounterConfig maxValue={maxValue}
                        startValue={startValue}
                        setValue={set}
                        disabledBtnSet={disabledBtnSet}
                        setChangeValues={setChangeValues}
                        setMaxValue={setMaxValue}
                        setStartValue={setStartValue}
                        setDisabledBtnSet={setDisabledBtnSet}
         />
         <Counter counter={counterValue}
                  inc={inc}
                  res={res}
                  maxValue={maxValue}
                  startValue={startValue}
                  changeValues={changeValues}
         />
      </div>
   );
}

export default AppWithRedux;

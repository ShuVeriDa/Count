import React from 'react';
import classes from '../App.module.css'
import {Button} from "./Button";
import {start} from "repl";

type DisplayPropsType = {
   counter: number
   inc: () => void
   res: () => void
   maxValue: string | number
   startValue: string | number
   changeValues: boolean
}

export const Buttons: React.FC<DisplayPropsType> = ({inc, res, counter, maxValue, startValue, ...props}) => {
   //1 вариант
   // const disabledInc = counter !== 5 ? false : true
   // const disabledRes = counter !== 0 ? false : true

   // 2 вариант
   const disabledInc = counter === maxValue || maxValue === startValue || props.changeValues
   const disabledRes = counter === startValue || maxValue === startValue || maxValue < startValue || props.changeValues

   return (
      <div className={classes.buttons}>
         <Button title={'inc'} callBack={inc} disabledActive={disabledInc}/>
         <Button title={'reset'} callBack={res} disabledActive={disabledRes}/>
      </div>
   );
};
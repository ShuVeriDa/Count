import React from 'react';
import classes from '../App.module.css'
import {Button} from "./Button";

type DisplayPropsType = {
   counter: number
   inc: () => void
   res: () => void
}

export const Buttons: React.FC<DisplayPropsType> = ({inc, res, counter}) => {
   //1 вариант
   // const disabledInc = counter !== 5 ? false : true
   // const disabledRes = counter !== 0 ? false : true

   // 2 вариант
   const disabledInc = counter === 5
   const disabledRes = counter === 0

   return (
      <div className={classes.buttons}>
         <Button title={'inc'} callBack={inc} disabledActive={disabledInc}/>
         <Button title={'reset'} callBack={res} disabledActive={disabledRes}/>
      </div>
   );
};
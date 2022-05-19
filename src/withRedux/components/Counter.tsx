import {Tablo} from "./Tablo";
import {Buttons} from "./Buttons";
import React, {useState} from "react";
import classes from '../../App.module.css'

export type CounterPropsType = {
   counter: number
   inc: () => void
   res: () => void
   maxValue: string | number
   startValue: string | number
   changeValues: boolean
}

export const Counter: React.FC<CounterPropsType> = ({counter, inc, res,...props}) => {
   return (
      <div className={classes.Counter}>
         <Tablo counter={counter}
                maxValue={props.maxValue}
                startValue={props.startValue}
                changeValues={props.changeValues}
         />
         <Buttons inc={inc}
                  res={res}
                  counter={counter}
                  maxValue={props.maxValue}
                  startValue={props.startValue}
                  changeValues={props.changeValues}
         />
      </div>
   );
};

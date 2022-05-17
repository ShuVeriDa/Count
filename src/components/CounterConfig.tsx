import classes from '../App.module.css'
import {TabloConfig} from "./TabloConfig";
import {Button} from "./Button";

export type CounterConfigPropsType = {
   maxValue: number
   startValue: number
   setMaxValue: (maxValue: number) => void
   setStartValue: (startValue: number) => void
   setValue: () => void
   disabledBtnSet: boolean
   setDisabledBtnSet: (b: boolean) => void
   setChangeValues: (b: boolean) => void
}

export const CounterConfig = (props: CounterConfigPropsType) => {

   const callBack = () => {
      props.setValue()
   }

   return (
      <div className={classes.CounterConfig}>
         <div className={classes.configs}>
            <TabloConfig value={props.maxValue} title={"max value:"} callBack={props.setMaxValue} setDisabledBtnSet={props.setDisabledBtnSet} setChangeValues={props.setChangeValues}/>
            <TabloConfig value={props.startValue} title={"start value:"} callBack={props.setStartValue} setDisabledBtnSet={props.setDisabledBtnSet} setChangeValues={props.setChangeValues}/>
         </div>
         <div className={classes.setButton}>
            <Button title={'set'} callBack={callBack} disabledActive={props.disabledBtnSet}/>
         </div>
      </div>
   );
};
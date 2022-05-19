import classes from '../../App.module.css'
import {TabloConfig} from "./TabloConfig";
import {Button} from "./Button";

export type CounterConfigPropsType = {
   maxValue: number
   startValue: number
   setValue: () => void
   disabledBtnSet: boolean
   setChangeValues: (chv: boolean) => void
   setMaxValue: (maxValue: string) => void
   setStartValue: (startValue: string) => void
   setDisabledBtnSet: (dsb: boolean) => void
}

export const CounterConfig = (props: CounterConfigPropsType) => {

   const callBack = () => {
      props.setValue()
   }

   const disabledSet = props.maxValue <= props.startValue || props.disabledBtnSet

   return (
      <div className={classes.CounterConfig}>
         <div className={classes.configs}>
            <TabloConfig value={props.maxValue} title={"max value:"} callBack={props.setMaxValue} setDisabledBtnSet={props.setDisabledBtnSet} setChangeValues={props.setChangeValues}/>
            <TabloConfig value={props.startValue} title={"start value:"} callBack={props.setStartValue} setDisabledBtnSet={props.setDisabledBtnSet} setChangeValues={props.setChangeValues}/>
         </div>
         <div className={classes.setButton}>
            <Button title={'set'} callBack={callBack} disabledActive={disabledSet}/>
         </div>
      </div>
   );
};
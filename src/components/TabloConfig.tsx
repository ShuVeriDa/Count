import classes from '../App.module.css'
import {ChangeEvent} from "react";

type TabloConfigPropsType = {
   title: string
   value:  number
   callBack: (value: number) => void
   setDisabledBtnSet: (b: boolean) => void

   setChangeValues: (b: boolean) => void
}

export const TabloConfig = (props:TabloConfigPropsType) => {
   const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      props.callBack(e.currentTarget.valueAsNumber)
      props.setDisabledBtnSet(false)
      props.setChangeValues(true)
   }
   return (
      <div className={classes.TabloConfig}>
            <span className={classes.text}>{props.title}</span>
            <input value={props.value}
                   className={props.value < 0 ? classes.inputError : classes.inputConfig}
                   type="number"
                   onChange={changeHandler}
            />
      </div>
   );
};

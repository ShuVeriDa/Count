import classes from '../../App.module.css'
import {FC} from "react";

type ButtonPropsType = {
   title: string
   callBack: () => void
   disabledActive: boolean
}

export const Button: FC<ButtonPropsType> = ({title, callBack, disabledActive, }) => {
   const clickHandler = () => {
      callBack()
   }

   return (
      <div>
         <button className={classes.button} onClick={clickHandler} disabled={disabledActive}>{title}</button>
      </div>
   );
};

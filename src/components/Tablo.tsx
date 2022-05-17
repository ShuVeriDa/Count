import classes from '../App.module.css'

type TabloPropsType = {
   counter: number
   maxValue: string | number
   startValue: string | number
   changeValues: boolean
}

export const Tablo: React.FC<TabloPropsType> = ({counter, maxValue, startValue, ...props}) => {

   const errorMaxValue = startValue >= maxValue
   const errorStartValue = startValue < 0 || startValue >= maxValue

   return (
      <div className={errorMaxValue || errorStartValue || counter === maxValue || props.changeValues ? `${classes.tablo} ${classes.tabloRed}` : classes.tablo}>
         {/*{maxValue === startValue || maxValue < 0 || startValue < 0 || startValue > maxValue ? 'Incorrect value' : counter}*/}
         {
            errorMaxValue || errorStartValue
            ? 'Incorrect value'
               : props.changeValues ? "enter values and press 'set'"
            : counter
         }
      </div>
   );
};
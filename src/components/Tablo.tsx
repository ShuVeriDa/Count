import classes from '../App.module.css'

type TabloPropsType = {
   counter: number
}

export const Tablo: React.FC<TabloPropsType> = ({counter}) => {
   return (
      <div className={counter === 5 ? `${classes.tablo} ${classes.tabloRed}` : classes.tablo}>
         {counter}
      </div>
   );
};
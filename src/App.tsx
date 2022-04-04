import React, {useState} from 'react';
import classes from './App.module.css';

import {Tablo} from "./components/Tablo";
import {Buttons} from "./components/Buttons";
import {TestCount} from "./TestCount/TestCount";

function App() {
   const [counter, setCounter] = useState<number>(0)
   const inc = () => setCounter(counter + 1)
   const res = () => setCounter(0)

   return (
      <div className={classes.App}>
         <Tablo counter={counter}/>
         <Buttons inc={inc} res={res} counter={counter}/>
         <TestCount />
      </div>
   );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './withoutRedux/App';
import reportWebVitals from './reportWebVitals';
import {store} from "./withRedux/store/store";
import {Provider} from "react-redux";
import AppWithRedux from "./withRedux/AppWithRedux";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <AppWithRedux/>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

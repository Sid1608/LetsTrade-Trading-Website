import React from 'react'
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App'
import {Provider} from 'react-redux';
import {store,persistor} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
require('dotenv').config();

<script src="https://kit.fontawesome.com/9b3f10b38e.js" crossorigin="anonymous"></script>

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


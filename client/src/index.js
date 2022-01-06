import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css'

import App from './App'

require('dotenv').config();
<script src="https://kit.fontawesome.com/9b3f10b38e.js" crossorigin="anonymous"></script>

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path='/' component={App} />
        </Router>
    </React.StrictMode>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


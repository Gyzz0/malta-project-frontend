import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import './assets/css/colors.css';
import './assets/css/options.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Size from './Size';

ReactDOM.render(
  <React.StrictMode>
    <App />    
    <Size />
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

/* Browswer listens to changes in the url and notified the routing components of the change */
ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById('root'))

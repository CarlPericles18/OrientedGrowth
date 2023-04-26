import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
const styles = { color: 'black', fontSize:'20px', textAlign:'center', marginTop:'10%' };

ReactDOM.createRoot(document.getElementById('root')).render(

<React.StrictMode>
    {/* <h1 style={styles}>Website is currently down for Maintenance. Thank you for you patience</h1> */}
    <App />
  </React.StrictMode>,
)

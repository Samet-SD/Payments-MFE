import React from 'react';
import ReactDom from 'react-dom'
import App from './App'

//Mount function to start up the app
const launch = (el) => {
    ReactDom.render(<App />, el);
    
};

//If we are in development and in isolation, call app imediately
if(process.env.NODE_ENV =="development"){
   let dev = document.querySelector('#_payments-root');
    
    if (dev) {
       launch(dev);
    }
}

export { launch }

//we are runnung through container we shozuld export the mpuint function
import React from 'react';
import ReactDom from 'react-dom'
import App from './App'
import { createMemoryHistory } from 'history'

const launch = (el, {onNavigate}) => {
    const history = createMemoryHistory();
    if(onNavigate){
        history.listen(onNavigate);
    }

ReactDom.render(<App history ={onNavigate}/>, el);
//If we are in development and in isolation, call app imediately
return {
    onParentNavigate({pathname}) {
        const myPath = history.location;

        if(pathname !== myPath){
            history.push(nextPath);
        }
    }
}
};

if(process.env.NODE_ENV =="development"){
   let dev = document.querySelector('#_payments-root');
   
    if (dev) {
       launch(dev, {});
    }
}

export { launch }


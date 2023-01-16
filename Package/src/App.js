import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'



import PaymentsApp from './components/PaymentsApp'

const App = ({history}) => {
  return (
    <div>

      <BrowserRouter history={history}>
      <Switch>
      <Route exact path="/" component={PaymentsApp} />
      <Route exact path="/Payments" component={PaymentsApp} />
      </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
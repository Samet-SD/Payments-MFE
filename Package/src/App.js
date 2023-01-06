import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'



import PaymentsApp from './components/PaymentsApp'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={PaymentsApp} />
      <Route exact path="/Payments" component={PaymentsApp} />
      </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App
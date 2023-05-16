import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Form from '../pages/Form'

const Routing = () => {
  return (
        <Switch>
      <Route  exact path='/' >
        <Home />
      </Route>
      <Route path='/form'>
        <Form />
      </Route>  
        </Switch>
  )
}

export default Routing

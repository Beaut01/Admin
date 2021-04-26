import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { Home } from './pages/Home'
import { AboutPage } from './pages/About'
import { ChangePage } from './pages/Change'
import { CreatePage } from './pages/Create'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={AboutPage} />
        <Route path='/cpu/:id' component={ChangePage} />
        <Route path='/create' component={CreatePage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;

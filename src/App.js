import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import Login from './components/Login'

import ProtectedRoute from './components/ProtectedRoute'

import NotFound from './components/NotFound'

import About from './components/About'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default App

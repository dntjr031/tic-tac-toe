import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './components/Login';
import './App.scss';
import Example9 from './components/Example9';
import Example10 from './components/Example10';
import Example11 from './components/Example11';
import Button from './components/Button';

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Switch>
        <Route path="/login" render={() => (isLogin ? <Redirect to="/" /> : <Login />)} />
        <Route path="/profile/:id" component={Profile} />
        <Route path="/profile" component={Profile} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
      <hr />
      <Button></Button>
    </BrowserRouter>
  );
}

export default App;

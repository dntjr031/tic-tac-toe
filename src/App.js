import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import NavLinks from './components/NavLinks';
import Login from './components/Login';
import './App.scss';
import { useRef, useState } from 'react';
import Modal from './components/Modal';
import MyInput from './components/MyInput';

const isLogin = false;

function App() {
  const [visible, setVisible] = useState(false);

  const open = () => {
    setVisible(true);
  };

  const close = () => {
    setVisible(false);
  };

  const click = () => {
    console.log(myInputRef.current.value);
  };

  const myInputRef = useRef();

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
      <button onClick={open}>open</button>
      {visible && (
        <Modal>
          <div
            onClick={close}
            style={{
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.5)',
            }}>
            Hello
          </div>
        </Modal>
      )}
      <hr />
      <div>
        <MyInput ref={myInputRef} />
        <button onClick={click}>click</button>
      </div>
    </BrowserRouter>
  );
}

export default App;

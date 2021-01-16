import './App.css';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import Contact from './Pages/Contact/Contact';
import Register from './Pages/Register/Register';
import LogIn from './Pages/LogIn/LogIn';
// /Register
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/Shop">
            <Shop />
          </Route>
          <Route exact path="/Contact">
            <Contact />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Redirect to="/Home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

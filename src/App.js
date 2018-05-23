import React, { Component } from 'react';
import { 
  HashRouter, 
  Route, 
  Switch,
  Redirect 
} from 'react-router-dom';
import { Home, About, Events, Products, Contact, Whoops404 }  from './components/pages';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/pulse/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HashRouter>
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Redirect from="/history" to="/about/history" />
              <Redirect from="/services" to="/about/services" />
              <Redirect from="/location" to="/about/location" />
              <Route path="/events" component={Events} />
              <Route path="/products" component={Products} />
              <Route path="/contact" component={Contact} />
              <Route component={Whoops404} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;

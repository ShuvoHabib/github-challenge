import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Popular from './Popular';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Nav = () => (
  <div>
    <h2>Nav</h2>
        <ul>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/popular">Popular</Link>
        </ul>
  </div>
);

class App extends Component {
    render() {
        return (
        <Router>
            <div className='container'>
                <Nav />
                <Route exact path="/" component={Home}/>
                <Route path="/popular" component={Popular}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>

        )
    }
}

export default App;
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './App.css';
import Popular from './Popular';
import Battle from './Battle';
import Nav from './Nav';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Route path="/popular" component={Popular}/>
                    <Route path="/battle" component={Battle}/>
                </div>
            </Router>

        )
    }
}

export default App;
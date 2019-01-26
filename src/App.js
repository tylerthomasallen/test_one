import React, { Component } from 'react';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import HomePage from './components/homepage'
import About from './components/about';
import { SHARED, ON_DEMAND } from './shared/constants';

class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            rideType: SHARED
        }

        this.changeRideType = this.changeRideType.bind(this);
    }

    changeRideType() {
        const rideType = this.state.rideType === SHARED ? ON_DEMAND : SHARED;
        this.setState({rideType});
    }

    render() {
        return(
            <Router>
                <div>
                    <NavBar />
                    <Route exact path ="/" render={() => (<HomePage rideType={this.state.rideType} changeRideType={this.changeRideType} />)} />
                    <Route exact path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default App;
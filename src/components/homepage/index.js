import React, { Component } from 'react';
import Header from '../header';

const HomePage = (props) => {
    debugger;
    return(
        <div>
            <Header changeRideType={props.changeRideType} rideType={props.rideType} />
        </div>
    )
}

export default HomePage;
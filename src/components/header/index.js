import React, { Component } from 'react';
import { SHARED, ON_DEMAND } from '../../shared/constants';

export const Header = (props) => {
    const { rideType } = props;
    return(
        <div>
            <h2>Header Comp</h2>
            <button onClick={props.changeRideType}>Change ride type!</button>
            {rideType === SHARED ? (
                <h3>Shared ride type selected</h3>
            ) : (
                <h3>On Demand ride type selected</h3>
            )}
        </div>

    );
}

export default Header;
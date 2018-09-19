import React, { Component } from 'react';

class CustomTooltip extends Component {
    render() {
        const { active } = this.props;
        
        if (active) {
            console.log(this.props);
            const { payload } = this.props;
            const info = payload[0].payload;
            return (
                <div style={{padding: 10, backgroundColor:"#DDDCE2", fontSize: 11}}>
                    <p>Name: {info.coin}</p>
                    <p>Market Cap: {info.x}</p>
                    <p>Volume: {info.y}</p>
                    <p>Price Change: {info.z}</p>
                </div>
            );
        }

        return null;
    }
}

export default CustomTooltip;
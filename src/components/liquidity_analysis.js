import React, { Component } from 'react';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter } from 'recharts';
import CustomTooltip from './custom_tooltip';
import { PropTypes } from 'prop-types';

class LiquidityAnalysis extends Component {
    render() {
        return (
            <ResponsiveContainer aspect={3}>
                <ScatterChart margin={{ top: 20, right: 50, left: 100, bottom: 50 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis label={{ value: 'MARKET CAP', position: 'bottom',offset: 30 }} dataKey="x" name="Market Cap" />
                    <YAxis label={{ value: 'VOLUME', angle: -90, position: 'left',offset: 50 }} dataKey="y" name="Volume" />
                    <ZAxis dataKey="z" range={[64, 144]} name="Price Change" />
                    <Tooltip
                        cursor={{ strokeDasharray: '3 3' }}
                        content={<CustomTooltip />}
                    />
                    <Legend />

                    <Scatter name="Coin" data={this.props.data} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>
        );
    }
}

LiquidityAnalysis.protoTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        coin: PropTypes.string.isRequired,
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        z: PropTypes.number.isRequired,
    })).isRequired,
}

export default LiquidityAnalysis;
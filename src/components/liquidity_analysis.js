import React, { Component } from 'react';
import { ResponsiveContainer, ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter } from 'recharts';

class LiquidityAnalysis extends Component {
    render() {
        return (
            <ResponsiveContainer aspect={3}>
                <ScatterChart margin={{top:20,right:30,left:0,bottom:0}}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="x" name="Market Cap" />
                    <YAxis dataKey="y" name="Volume" />
                    <ZAxis dataKey="z" range={[64, 144]} name="Price Change" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend />
                    
                    <Scatter name="Market Cap" data={this.props.data} fill="#8884d8" />
                </ScatterChart>
            </ResponsiveContainer>            
        );
    }
}

export default LiquidityAnalysis;
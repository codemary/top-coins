import React, { Component } from 'react';

class MarketOverviewRow extends Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>{data.rank}</td>
                <td>{data.name}</td>
                <td>${data.price}</td>
                <td>{data.price_change_24h}%</td>
                <td>${data.market_cap}</td>
                <td>${data.volume_24h}</td>
            </tr>
        );
    }
}

export default MarketOverviewRow;
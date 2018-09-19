import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MarketOverviewRow extends Component {
    render() {
        const { data } = this.props;
        return (
            <tr>
                <td>{data.rank}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.price_change_24h}</td>
                <td>{data.market_cap}</td>
                <td>{data.volume_24h}</td>
            </tr>
        );
    }
}

MarketOverviewRow.propTypes = {
    data: PropTypes.shape({
        rank: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        price_change_24h: PropTypes.number.isRequired,
        market_cap: PropTypes.number.isRequired,
        volume_24h: PropTypes.number.isRequired
    })
}

export default MarketOverviewRow;
import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import MarketOverviewRow from './market_overview_row';

// Market Overview Table
class MarketOverview extends Component {
    render() {
        const { data } = this.props;
        return (
            <div className="Table">
				<Table 
					responsive
					bordered
					condensed
					hover
					striped
				>
					<thead>
						<tr>
							<th>Rank</th>
							<th>Name</th>
							<th>Price</th>
							<th>Price Change (24h)</th>
							<th>Market Cap</th>
							<th>Volume (24h)</th>
						</tr>
					</thead>
					<tbody>
                        {data.map((item, i) => <MarketOverviewRow data={item} key={i} />)}
					</tbody>
				</Table>
			</div>
        );
    }
}

export default MarketOverview;
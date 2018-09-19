import React, { Component } from 'react';
import { Table} from 'react-bootstrap';

// Market Overview Table
class MarketOverview extends Component {
    render() {
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
							<th>Price Change (24th)</th>
							<th>Market Cap</th>
							<th>Volume (24th)</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Bitcoin</td>
							<td>$6,764.99</td>
							<td>-4.41%</td>
							<td>$114,784,460,451</td>
							<td>$4,551,630,000</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Ethereum</td>
							<td>$395.74</td>
							<td>-1.04%</td>
							<td>$39,064,506,094</td>
							<td>$1,367,120,000</td>
						</tr>
					</tbody>
				</Table>
			</div>
        );
    }
}

export default MarketOverview;
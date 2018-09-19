import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import MarketOverview from './market_overview';
Enzyme.configure({adapter: new Adapter()});

test('Check if MarketOverview Component accepts props', () => {
    let data1 = [{
        rank: 1, 
        name: "bitcoin", 
        price: 1, 
        price_change_24h: 0.2, 
        market_cap: 1000, 
        volume_24h: 10000,
    } ];

    let data2 = [{
        rank: 2, 
        name: "mycoin", 
        price: 5, 
        price_change_24h: 0.2, 
        market_cap: 1000, 
        volume_24h: 10000,
    } ];
    
    const wrapper = mount(<MarketOverview data={data1} />);
    expect(wrapper.props().data).to.equal(data1);
    wrapper.setProps({ data: data2 });
    expect(wrapper.props().data).to.equal(data2);
});
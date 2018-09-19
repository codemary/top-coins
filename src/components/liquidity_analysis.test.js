import React from 'react';
import { expect } from 'chai';
import Enzyme, { mount } from 'enzyme';
import LiquidityAnalysis from './liquidity_analysis';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

test('Check if LiquidityAnalysis Component accepts props', () => {
    let data1 = [{coin: "bitcon", x:1,y: 2, z: 3}];
    let data2 = [{coin: "mycoin", x:1,y: 2, z: 3}];
    const wrapper = mount(<LiquidityAnalysis data={data1} />);
    expect(wrapper.props().data).to.equal(data1);
    wrapper.setProps({ data: data2 });
    expect(wrapper.props().data).to.equal(data2);
});
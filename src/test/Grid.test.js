import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../Grid';
import Pixel from '../Pixel';

it('renders a grid with n rows where n is the dimension', () => {
    const wrapper = shallow(<Grid dimension={2}/>);
    const grid = wrapper.find('div');
    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty("display", "grid");
    expect(grid.prop('style')).toHaveProperty("gridTemplateColumns", "repeat(2, 1fr)");
});

it('renders dimension^2 Pixel components', () => {
    let wrapper = shallow(<Grid dimension={2}/>);
    expect(wrapper.find(Pixel).length).toBe(4);

    wrapper = shallow(<Grid dimension={4}/>);
    expect(wrapper.find(Pixel).length).toBe(16);
});
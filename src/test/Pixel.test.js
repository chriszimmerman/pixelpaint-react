import React from 'react';
import Pixel from '../Pixel';
import { shallow } from 'enzyme';

it('renders a pixel with a given color', () => {
    const expectedColor = "#11CCFF" 
    const wrapper = shallow(<Pixel color={expectedColor} />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty("backgroundColor", expectedColor);
});

it('defaults the color to white', () => {
    const expectedColor = "#000000" 
    const wrapper = shallow(<Pixel/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty("backgroundColor", expectedColor);
});

it('is 20 by 20 pixels', () => {
    const wrapper = shallow(<Pixel/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty("height", "20px");
    expect(wrapper.find('div').prop('style')).toHaveProperty("width", "20px");
});
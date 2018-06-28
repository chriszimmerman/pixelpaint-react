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
    const expectedColor = "#FFFFFF" 
    const wrapper = shallow(<Pixel/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty("backgroundColor", expectedColor);
});
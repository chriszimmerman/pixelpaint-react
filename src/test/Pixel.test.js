import React from 'react';
import Pixel from '../Pixel';
import { shallow } from 'enzyme';

it('renders a pixel with a given color', () => {
    const expectedColor = "#11CCFF" 
    const wrapper = shallow(<Pixel backgroundColor={expectedColor} />);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty("backgroundColor", expectedColor);
});

it('defaults the color to white', () => {
    const expectedColor = "#FFFFFF" 
    const wrapper = shallow(<Pixel/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty("backgroundColor", expectedColor);
});

it('takes an onClick handler as a prop and sets it on the onClick event', () => {
    const expectedOnClick = () => {};
    const wrapper = shallow(<Pixel handleOnClick={expectedOnClick}/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('onClick')).toBe(expectedOnClick);
});

it('is 20 by 20 pixels', () => {
    const wrapper = shallow(<Pixel/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty("height", "20px");
    expect(wrapper.find('div').prop('style')).toHaveProperty("width", "20px");
});

it('is inline-block', () => {
    const wrapper = shallow(<Pixel/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty("display", "inline-block");
})
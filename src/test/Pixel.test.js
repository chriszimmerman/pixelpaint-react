import React from 'react';
import Pixel from '../Pixel';
import td from 'testdouble';
import { shallow } from 'enzyme';

it('renders a pixel with a given color', () => {
    const expectedColor = '#11CCFF' 
    const wrapper = shallow(<Pixel backgroundColor={expectedColor} handleOnClick={td.func()}/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty('backgroundColor', expectedColor);
});

it('defaults the color to white', () => {
    const expectedColor = '#FFFFFF' 
    const wrapper = shallow(<Pixel handleOnClick={td.func()}/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty('backgroundColor', expectedColor);
});

it('takes an onMouseDown handler as a prop and sets it on the onMouseDown event', () => {
    const expectedOnMouseDown = td.func(); 
    const wrapper = shallow(<Pixel handleOnClick={expectedOnMouseDown}/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('onMouseDown')).toBe(expectedOnMouseDown);
});

it('triggers the onMouseDown event to happen if the left mouse button is down on mouseenter', () => {
    const expectedOnMouseDown = td.func(); 
    const wrapper = shallow(<Pixel handleOnClick={expectedOnMouseDown}/>);
    wrapper.simulate("mouseenter", {buttons: "hi"});
    td.verify(expectedOnMouseDown());
});

it('does not trigger the onMouseDown event to happen if the left mouse button is not down on mouseenter', () => {
    const expectedOnMouseDown = td.func(); 
    const wrapper = shallow(<Pixel handleOnClick={expectedOnMouseDown}/>);
    wrapper.simulate("mouseenter", {});
    td.verify(expectedOnMouseDown(), {times: 0});
});

it('is 20 by 20 pixels', () => {
    const wrapper = shallow(<Pixel handleOnClick={td.func()}/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty('height', '20px');
    expect(wrapper.find('div').prop('style')).toHaveProperty('width', '20px');
});

it('is inline-block', () => {
    const wrapper = shallow(<Pixel handleOnClick={td.func()}/>);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('div').prop('style')).toHaveProperty('display', 'inline-block');
})

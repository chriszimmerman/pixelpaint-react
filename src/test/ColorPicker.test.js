import React from 'react';
import ColorPicker from '../ColorPicker';
import { shallow } from 'enzyme';

it('renders a color picker', () => {
    const wrapper = shallow(<ColorPicker onColorChanged={() => {}}/>);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('type')).toBe("color");
});

it('default the color to black', () => {
    const expectedColor = "#000000"
    const wrapper = shallow(<ColorPicker onColorChanged={() => {}}/>);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('value')).toBe(expectedColor);
});

it('sets the ColorPicker color to the passed in color prop', () => {
    const expectedColor = "#FFFFFF"
    const wrapper = shallow(<ColorPicker color={expectedColor} onColorChanged={() => {}}/>);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('value')).toBe(expectedColor);
});

it('sets the ColorPicker onChange event to the passed in onColorChanged prop', () => {
    const expectedOnChange = () => {};
    const wrapper = shallow(<ColorPicker onColorChanged={expectedOnChange} />);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('onChange')).toBe(expectedOnChange);
});
import React from 'react';
import ColorPicker from '../ColorPicker';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

it('renders a color picker', () => {
    const wrapper = shallow(<ColorPicker />);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('type')).toBe("color");
});
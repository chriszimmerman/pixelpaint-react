import React from 'react';
import App from '../App';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import ColorPicker from '../ColorPicker';

it('renders a ColorPicker component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ColorPicker).length).toBe(1);
});
import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import ColorPicker from '../ColorPicker';

it('renders a ColorPicker component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ColorPicker).length).toBe(1);
});
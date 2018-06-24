import React from 'react';
import App from '../App';
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

it('renders a header that says "Hello World!"', () => {
    const title = "Hello World!";
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('h1').text()).toBe(title);
});

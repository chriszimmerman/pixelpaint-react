import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../Grid';
import Pixel from '../Pixel';

it('renders a Pixel component', () => {
    const wrapper = shallow(<Grid />);
    expect(wrapper.find(Pixel).length).toBe(1);
});
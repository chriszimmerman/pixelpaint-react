import React from 'react';
import { shallow } from 'enzyme';
import td from 'testdouble';
import GridToggle from '../GridToggle';

it('renders a checkbox defaulted to checked', () => {
    const wrapper = shallow(<GridToggle handleToggle={td.func()}/>);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('type')).toBe('checkbox');
    expect(wrapper.find('input').prop('checked')).toBe(true);
});

it('calls the onToggle function prop when clicked', () => {
    const expectedOnToggle = td.func();
    const wrapper = shallow(<GridToggle handleToggle={expectedOnToggle}/>);
    expect(wrapper.find('input').length).toBe(1);
    expect(wrapper.find('input').prop('onChange')).toBe(expectedOnToggle);
});

it('renders a label indicating whether to show the grid lines or not', () => {
    const wrapper = shallow(<GridToggle handleToggle={td.func()}/>);
    const expectedLabelText = "Show grid:";
    expect(wrapper.find('label').length).toBe(1);
    expect(wrapper.find('label').text()).toBe(expectedLabelText);
});

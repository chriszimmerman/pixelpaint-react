import React from 'react';
import App from '../App';
import { shallow } from 'enzyme';
import Grid from '../Grid';
import ColorPicker from '../ColorPicker';
import GridToggle from '../GridToggle';
import ImageExportButton from '../ImageExportButton';
import DimensionDropdown from '../DimensionDropdown';

it('renders a ColorPicker component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(ColorPicker).length).toBe(1);
});

it('renders a Grid component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Grid).length).toBe(1);
});

it('renders a GridToggle component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(GridToggle).length).toBe(1);
})

it('renders an ImageExportButton', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(ImageExportButton).length).toBe(1);
});

it('renders a DimensionDropdown component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(DimensionDropdown).length).toBe(1);
});

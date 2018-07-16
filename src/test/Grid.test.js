import React from 'react';
import { shallow } from 'enzyme';
import Grid from '../Grid';
import Pixel from '../Pixel';

it('renders a grid with n columns where n is the dimension', () => {
    const wrapper = shallow(<Grid dimension={2} pixels={[]}/>);
    const grid = wrapper.find('div');
    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty('display', 'grid');
    expect(grid.prop('style')).toHaveProperty('gridTemplateColumns', 'repeat(2, 1fr)');
});

it('renders a grid with black lines between the cells', () => {
    const wrapper = shallow(<Grid pixels={[]}/>);
    const grid = wrapper.find('div');
    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty('gridColumnGap', '1px');
    expect(grid.prop('style')).toHaveProperty('gridRowGap', '1px');
    expect(grid.prop('style')).toHaveProperty('backgroundColor', 'black');
});

it('has a black border 1 pixel thick', () => {
    const wrapper = shallow(<Grid pixels={[]}/>);
    const grid = wrapper.find('div');
    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty('border', '1px solid black');
});

it('has a width equal to all of the squares\' width, the lines between the squares, and the border lines', () => {
    const gridDimension = 8;
    const pixelWidth = 20;
    const widthOfLinesBetweenSquares = 7;
    const widthOfGridBorder = 2;
    const expectedWidth = (gridDimension * pixelWidth) + widthOfLinesBetweenSquares + widthOfGridBorder;
    
    const wrapper = shallow(<Grid dimension={gridDimension} pixels={[]}/>);
    const grid = wrapper.find('div');
    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty('width', expectedWidth);
});

it('renders the pixels passed in as props', () => {
    const pixels = [
        {color: "#000000"},
        {color: "#000000"}
    ];

    let wrapper = shallow(<Grid pixels={pixels}/>);
    expect(wrapper.find(Pixel).length).toBe(2);
});
import React from 'react';
import { shallow } from 'enzyme';
import td from 'testdouble';
import Grid from '../Grid';
import Pixel from '../Pixel';

it('renders a grid with n columns where n is the dimension', () => {
    const wrapper = shallow(<Grid dimension={2} pixels={[]} updatePixelColor={td.func()}/>);
    const grid = wrapper.findWhere(element => element.hasClass('grid'));

    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty('display', 'grid');
    expect(grid.prop('style')).toHaveProperty('gridTemplateColumns', 'repeat(2, 1fr)');
});

it('renders a grid with black lines between the cells', () => {
    const gridDimension = 8;
    const pixelWidth = 20;
    const widthOfLinesBetweenSquares = 7;
    const widthOfGridBorder = 2;
    const expectedWidth = (gridDimension * pixelWidth) + widthOfLinesBetweenSquares + widthOfGridBorder;

    const wrapper = shallow(<Grid dimension={gridDimension} pixels={[]} showGridLines={true} updatePixelColor={td.func()}/>);
    const grid = wrapper.findWhere(element => element.hasClass('grid'));

    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty('gridColumnGap', '1px');
    expect(grid.prop('style')).toHaveProperty('gridRowGap', '1px');
    expect(grid.prop('style')).toHaveProperty('backgroundColor', 'black');
    expect(grid.prop('style')).toHaveProperty('width', expectedWidth);
});

it('does not render lines between the cells when showGridLines is false', () => {
    const gridDimension = 2;
    const pixelWidth = 20;
    const widthOfGridBorder = 2;
    const expectedWidth = (gridDimension * pixelWidth) + widthOfGridBorder;

    const wrapper = shallow(<Grid dimension={gridDimension} pixels={[]} showGridLines={false} updatePixelColor={td.func()}/>);
    const grid = wrapper.findWhere(element => element.hasClass('grid'));

    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty('display', 'grid');
    expect(grid.prop('style')).toHaveProperty('gridTemplateColumns', 'repeat(2, 0fr)');
    expect(grid.prop('style')).toHaveProperty('width', expectedWidth);

    expect(grid.prop('style')).not.toHaveProperty('gridColumnGap', '1px');
    expect(grid.prop('style')).not.toHaveProperty('gridRowGap', '1px');
    expect(grid.prop('style')).not.toHaveProperty('backgroundColor', 'black');
})

it('has a black border 1 pixel thick', () => {
    const wrapper = shallow(<Grid pixels={[]} updatePixelColor={td.func()}/>);
    const grid = wrapper.findWhere(element => element.hasClass('grid'));

    expect(grid.length).toBe(1);
    expect(grid.prop('style')).toHaveProperty('border', '1px solid black');
});

it('renders the pixels passed in as props', () => {
    const pixels = [
        {color: "#000000"},
        {color: "#000000"}
    ];

    let wrapper = shallow(<Grid pixels={pixels} updatePixelColor={td.func()}/>);

    expect(wrapper.find(Pixel).length).toBe(2);
});

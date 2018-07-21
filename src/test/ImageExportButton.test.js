import React from 'react';
import ImageExportButton from '../ImageExportButton';
import { shallow } from 'enzyme';

it('renders a button', () => {
    const dimension = 1;
    const pixels = [{color: "#FFFFFF"}];
    const wrapper = shallow(<ImageExportButton dimension={dimension} pixels={pixels} />);
    const button = wrapper.find('button');

    expect(button.length).toBe(1);
    expect(button.text()).toBe('Export Image');
});
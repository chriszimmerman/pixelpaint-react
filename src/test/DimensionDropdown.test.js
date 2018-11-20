import React from 'react';
import { shallow } from 'enzyme';
import DimensionDropdown from '../DimensionDropdown';

it('renders a select dropdown with three options: 8x8, 16x16, and 32x32', () => {
    const wrapper = shallow(<DimensionDropdown/>);
    const dropdown = wrapper.find('select');
    expect(dropdown.length).toBe(1);
    const options = wrapper.find('option');
    expect(options.length).toBe(3);

    expect(options.get(0).props.value).toBe("8x8");
    expect(options.get(0).props.children).toBe("8x8");
    expect(options.get(1).props.value).toBe("16x16");
    expect(options.get(1).props.children).toBe("16x16");
    expect(options.get(2).props.value).toBe("32x32");
    expect(options.get(2).props.children).toBe("32x32");
});

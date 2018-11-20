import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DimensionDropdown extends Component {
    render() {
        return (
            <select>
                <option value="8x8">8x8</option>
                <option value="16x16">16x16</option>
                <option value="32x32">32x32</option>
            </select>
        );
    }
}

export default DimensionDropdown;

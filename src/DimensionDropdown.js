import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DimensionDropdown extends Component {
    render() {
        return (
            <select onChange={this.props.handleChange}>
                <option value="8">8x8</option>
                <option value="16">16x16</option>
                <option value="32">32x32</option>
            </select>
        );
    }
}

DimensionDropdown.propTypes = {
    handleChange: PropTypes.func.isRequired
};

export default DimensionDropdown;

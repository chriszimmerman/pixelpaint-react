import React from 'react';
import PropTypes from 'prop-types';

class ColorPicker extends React.Component {
    render() {
        return (
            <input
                type="color"
                value={this.props.color}
                onChange={this.props.onColorChanged}
            />
        );
    }
}

export default ColorPicker;

ColorPicker.propTypes = {
    color: PropTypes.string,
    onColorChanged: PropTypes.func.isRequired
};

ColorPicker.defaultProps = {
    color: '#000000'
};

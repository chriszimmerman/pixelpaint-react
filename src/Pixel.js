import React from 'react';
import PropTypes from 'prop-types';

class Pixel extends React.Component {
    render() {
        var style = {
            backgroundColor: this.props.color,
        };
        return (
            <div style={style}></div>
        );
    }
}

export default Pixel;

Pixel.propTypes = {
    color: PropTypes.string
};

Pixel.defaultProps = {
    color: '#FFFFFF'
};
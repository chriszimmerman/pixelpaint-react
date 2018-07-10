import React from 'react';
import PropTypes from 'prop-types';

class Pixel extends React.Component {
    render() {
        var style = {
            backgroundColor: this.props.color,
            height: "20px",
            width: "20px"
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
    color: '#000000'
};
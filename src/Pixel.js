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
            <div
                style={style}
                onClick={this.props.handleOnClick}
            ></div>
        );
    }
}

export default Pixel;

Pixel.propTypes = {
    color: PropTypes.string,
    handleOnClick: PropTypes.func
};

Pixel.defaultProps = {
    color: '#000000'
};
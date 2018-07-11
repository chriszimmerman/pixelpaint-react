import React from 'react';
import PropTypes from 'prop-types';

class Pixel extends React.Component {
    render() {
        var style = {
            backgroundColor: this.props.backgroundColor,
            height: "20px",
            width: "20px",
            display: "inline-block"
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
    backgroundColor: PropTypes.string,
    handleOnClick: PropTypes.func
};

Pixel.defaultProps = {
    backgroundColor: '#FFFFFF'
};
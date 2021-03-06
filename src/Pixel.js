import React from 'react';
import PropTypes from 'prop-types';

class Pixel extends React.Component {
    render() {
        var style = {
            backgroundColor: this.props.backgroundColor,
            height: '20px',
            width: '20px',
            display: 'inline-block'
        };

        return (
            <div
                style={style}
                onMouseDown={this.props.handleOnClick}
                onMouseEnter={(event) => {if(event.buttons){this.props.handleOnClick();}}}
            ></div>
        );
    }
}

export default Pixel;

Pixel.propTypes = {
    backgroundColor: PropTypes.string,
    handleOnClick: PropTypes.func.isRequired
};

Pixel.defaultProps = {
    backgroundColor: '#FFFFFF'
};

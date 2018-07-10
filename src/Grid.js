import React from 'react';
import PropTypes from 'prop-types';
import Pixel from './Pixel';

class Grid extends React.Component {
    state = {
        color: this.props.currentColor
    }

    updateColor = () => {
        this.setState({color: this.props.currentColor});
    }

    render() {
        return (
            <div>
                <Pixel color={this.state.color} handleOnClick={this.updateColor}/>
            </div>
        );
    }
}

export default Grid;

Grid.propTypes = {
    currentColor: PropTypes.string
};
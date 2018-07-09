import React from 'react';
import PropTypes from 'prop-types';
import Pixel from './Pixel';

class Grid extends React.Component {
    render() {
        return (
            <div>
                <Pixel/>
            </div>
        );
    }
}

export default Grid;

Grid.propTypes = {
    currentColor: PropTypes.string
};
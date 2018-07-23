import React from 'react';
import PropTypes from 'prop-types';
import Pixel from './Pixel';

class Grid extends React.Component {
    render() {
        const style = {
            display: 'grid',
            gridTemplateColumns: `repeat(${this.props.dimension}, 1fr)`,
            gridColumnGap: '1px',
            gridRowGap: '1px',
            backgroundColor: 'black',
            border: '1px solid black',
            width: 20 * this.props.dimension + this.props.dimension + 1
        }

        return (
            <div style={style}>
                {
                    this.props.pixels.map((pixel, index) =>
                        <Pixel
                            key={index}
                            backgroundColor={pixel.color}
                            handleOnClick={() => {this.props.updatePixelColor(index)}}
                        />
                    )
                }
            </div>
        );
    }
}

export default Grid;

Grid.propTypes = {
    dimension: PropTypes.number,
    pixels: PropTypes.arrayOf(PropTypes.object).isRequired,
    updatePixelColor: PropTypes.func.isRequired
};

Grid.defaultProps = {
    dimension: 8
};
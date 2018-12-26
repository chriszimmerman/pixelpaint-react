import React from 'react';
import PropTypes from 'prop-types';
import Pixel from './Pixel';
import './Grid.css';

class Grid extends React.Component {
    getGridStyle = () => {
        if(this.props.showGridLines) {
            return {
                display: 'grid',
                gridTemplateColumns: `repeat(${this.props.dimension}, 1fr)`,
                border: '1px solid black',
                width: 20 * this.props.dimension + this.props.dimension + 1,
                gridColumnGap: '1px',
                gridRowGap: '1px',
                backgroundColor: 'black'
            }
        }

        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${this.props.dimension}, 0fr)`,
            border: '1px solid black',
            width: 20 * this.props.dimension + 2
        };
    };

    render() {
        const gridStyle = this.getGridStyle();

        return (
            <div className='grid-wrapper'>
                <div className='grid' style={gridStyle}>
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
            </div>
        );
    }
}

export default Grid;

Grid.propTypes = {
    dimension: PropTypes.number,
    pixels: PropTypes.arrayOf(PropTypes.object).isRequired,
    updatePixelColor: PropTypes.func.isRequired,
    showGridLines: PropTypes.bool
};

Grid.defaultProps = {
    dimension: 8,
    showGridLines: true
};

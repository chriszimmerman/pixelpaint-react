import React from 'react';
import PropTypes from 'prop-types';
import Pixel from './Pixel';

class Grid extends React.Component {
    generatePixels = () => {
        return Array.from(new Array(this.props.dimension * this.props.dimension), (x,i) => {
            return {key: i, color: '#FFFFFF'};
        });
    }

    state = {
        brushColor: this.props.currentColor,
        pixels: this.generatePixels()
    }

    updateColor = (key) => {
        const pixels = this.state.pixels;
        pixels[key].color = this.props.currentColor;
        this.setState(pixels);
    }

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
                    this.state.pixels.map((pixel) =>
                        <Pixel
                            key={pixel.key}
                            backgroundColor={pixel.color}
                            handleOnClick={() => {this.updateColor(pixel.key)}}
                        />
                    )
                }
            </div>
        );
    }
}

export default Grid;

Grid.propTypes = {
    currentColor: PropTypes.string,
    dimension: PropTypes.number
};

Grid.defaultProps = {
    dimension: 8
};
import React from 'react';
import ColorPicker from './ColorPicker';
import Grid from './Grid';
import './App.css';
import ImageExportButton from './ImageExportButton';
import GridToggle from './GridToggle';
import DimensionDropdown from './DimensionDropdown';

class App extends React.Component {
    constructor(props){
        super(props);

        const defaultDimension = 8;

        this.state = {
            selectedBrushColor: '#000000',
            showGridLines: true,
            dimension: defaultDimension,
            pixels: this.generatePixels(defaultDimension)
        };
    }

    generatePixels = (dimension) => {
        return Array.from(new Array(dimension * dimension), (_) => {
            return {color: '#FFFFFF'};
        });
    }

    updatePixelColor = (key) => {
        const pixels = this.state.pixels;
        pixels[key].color = this.state.selectedBrushColor;
        this.setState(pixels);
    }

    updateSelectedBrushColor = (event) => {
        this.setState({selectedBrushColor: event.target.value});
    }

    toggleGridLines = (event) => {
        this.setState({showGridLines: event.target.checked});
    }

    handleDimensionChange = (event) => {
        const newDimension = Number(event.target.value);
        this.setState(
            {
                dimension: newDimension,
                pixels: this.generatePixels(newDimension)
            }
        );
    }

    render() {
        return (
            <div className='app-container'>
                <div className='color-picker'>
                    <label>Color:</label>
                    <ColorPicker
                        color={this.state.selectedBrushColor}
                        onColorChanged={this.updateSelectedBrushColor}
                    />
                </div>
                <div>
                    <GridToggle
                        checked={this.state.showGridLines}
                        handleToggle={this.toggleGridLines}
                    />
                </div>
                <div>
                    <label>Size:</label>
                    <DimensionDropdown
                        handleChange={this.handleDimensionChange}
                    />
                </div>
                <div>
                    <ImageExportButton
                        dimension={this.state.dimension}
                        pixels={this.state.pixels}
                    />
                </div>
                <div>
                    <Grid
                        pixels={this.state.pixels}
                        updatePixelColor={this.updatePixelColor}
                        dimension={this.state.dimension}
                        showGridLines={this.state.showGridLines}
                    />
                </div>
            </div>
        );
    }
}

export default App;

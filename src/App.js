import React from 'react';
import ColorPicker from './ColorPicker';
import Grid from './Grid';
import './App.css';
import ImageExportButton from './ImageExportButton';

class App extends React.Component {
  constructor(props){
    super(props);

    const dimension = 8;
    const generatePixels = () => {
        return Array.from(new Array(dimension * dimension), (_) => {
            return {color: '#FFFFFF'};
        });
    }

    this.state = {
      selectedBrushColor: '#000000',
      dimension: dimension,
      pixels: generatePixels()
    };
  }

  updatePixelColor = (key) => {
      const pixels = this.state.pixels;
      pixels[key].color = this.state.selectedBrushColor;
      this.setState(pixels);
  }

  updateSelectedBrushColor = (event) => {
    this.setState({selectedBrushColor: event.target.value});
  }

  render() {
      return (
        <div className='app-container'>
          <ColorPicker
            color={this.state.selectedBrushColor}
            onColorChanged={this.updateSelectedBrushColor}
          />
          <ImageExportButton
            dimension={this.state.dimension}
            pixels={this.state.pixels}
          />
          <Grid
            pixels={this.state.pixels}
            updatePixelColor={this.updatePixelColor}
            dimension={this.state.dimension}
           />
        </div>
      );
  }
}

export default App;
import React from 'react';
import ColorPicker from './ColorPicker';
import Grid from './Grid';
import './App.css';
import RgbToByteConverter from './RgbToByteConverter';
import { encode } from 'bmp-js';

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

  saveImage = () => {
    const imageBytes = new RgbToByteConverter().convert(this.state.pixels);
    const imageData = {
      data: imageBytes,
      height: this.state.dimension,
      width: this.state.dimension
    };

    fetch('/save', {
      method: 'POST',
      body: JSON.stringify(imageData),
      headers: { "Content-Type": "application/json; charset=utf-8" }
    }).then((response) => {
      const anchorTag = document.createElement('a');
      anchorTag.href = '/image.bmp';
      anchorTag.download = 'image.bmp';
      document.body.appendChild(anchorTag);
      anchorTag.click();
      document.body.removeChild(anchorTag);
    });
  }

  render() {
      return (
        <div className='app-container'>
          <ColorPicker
            color={this.state.selectedBrushColor}
            onColorChanged={this.updateSelectedBrushColor}
          />
          <button onClick={this.saveImage}>Export Image</button>
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
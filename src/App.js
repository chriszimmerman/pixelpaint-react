import React from 'react';
import ColorPicker from './ColorPicker';
import Grid from './Grid';
import './App.css';

class App extends React.Component {

  state = {
    selectedColor: '#000000'
  }

  updateColor = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  render() {
      return (
        <div className='app-container'>
          <ColorPicker
            color={this.state.selectedColor}
            onColorChanged={this.updateColor}
          />
          <Grid currentColor={this.state.selectedColor}/>
        </div>
      );
  }
}

export default App;

import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

class App extends React.Component {

  state = {
    selectedColor: "#000000"
  }

  updateColor = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  render() {
      return (
        <div className="app-container">
          <ColorPicker
            color={this.state.selectedColor}
            onColorChanged={this.updateColor}
          />
        </div>
      );
  }
}

export default App;

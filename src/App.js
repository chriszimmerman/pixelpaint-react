import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <div class="app-container">
          <ColorPicker/>
        </div>
      );
  }
}

export default App;

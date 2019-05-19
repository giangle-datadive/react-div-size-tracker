import React from 'react';
import DivSizeTracker from './components/DivSizeTracker';
import './App.css';

function App() {
  return (
    <div className="App">
      <DivSizeTracker style={{ height: '50vh', width: '100%', }}>
        {(width, height) => (
          <div style={{ width, height }} className="test">
            {`${width} x ${height}`}
          </div>
        )}
      </DivSizeTracker>

      <div className="resize-it">
        Try resize the window
      </div>
    </div>
  );
}

export default App;

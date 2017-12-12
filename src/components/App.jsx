import React from 'react';
import rappersList from '../data/rapper.js';
import { render } from 'react-dom';

class App extends React.Component {
  render() {
    return (
        <div>
          <h2>Welcome to my first React application! <br></br>
            Below is a list of rappers. Take a look!
          </h2>
          {
            rappersList.rappers.map(rapper => (
              <div className='rapperDiv' key={rapper.name}>
                <h3>{rapper.name}</h3>
                <p>Age: {rapper.age}</p>
                <img src={`../src/assets/${rapper.image}`}/>
                <p><strong>POPULAR SONGS:</strong> <br></br>{rapper.songs}</p>
              </div>
            ))
          }
        </div>
    )
  }
}

export default App;

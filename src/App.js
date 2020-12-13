import './App.css';
import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '' };

  }
  
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(position => {
      this.setState({ lat: position.coords.latitude })
    }, (err) => {
      this.setState({ errorMessage: err.message})
    })
  }

  componentDidUpdate() {
    console.log('My component was just updated - it rendered!');
  }


  render() {
    if(this.state.errorMessage && !this.state.lat)
      return (
        <div>
        Error: {this.state.errorMessage}
        </div>
      )
    
    if(!this.state.errorMessage && this.state.lat)
    return (
      <div>
      <SeasonDisplay lat={this.state.lat} />
      </div>
    )

    return <div><Spinner message="Please, accept location request" /></div>
  }
}

export default App;

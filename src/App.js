import React, { Component } from 'react';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    // Define the initial state with a Person object and shows boolean
    this.state = {
      person: {
        fullName: 'Akande Ridwanullah',
        bio: 'A React developer',
        imgSrc: require("./image.jpg"),
        profession: 'Software Engineer',
      },
      shows: true,
      timeInterval: new Date (), // Initialize elapsed time to 0
    };
  }

  // Function to toggle the 'shows' state
  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  }

      // Capture the moment when the component was mounted
  componentDidMount() {
    this.setState({
      timeInterval: new Date (),
    });
  }

  // Lifecycle method to clear the timer when the component unmounts
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeInterval } = this.state;

    return (
      <div className='App'>
            <h1>My Profile</h1>
            <button onClick={this.toggleShow}>
              {shows ? "Hide Profile" : "Seek Profile"}
            </button>

            {shows && (
              <div className='Card'>
                <h2>{fullName}</h2>
                <p>Bio: {bio}</p>
                <p>Profession: {profession}</p>
                <img src={imgSrc} alt={fullName} />
              </div>
            )}

            <p>Time since mount: {timeInterval.toLocaleDateString()}</p>
        </div>
    );
  }
}

export default App;

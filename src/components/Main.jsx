import React from 'react';
import Moment from 'react-moment';
import randomString from 'random-string';
import '../style/components/Main.scss';

export default class Main extends React.Component {

  state = {
    user: ' sir & madam'
  };

  welcomeMsg = () => {
    // let randomString = require('random-string');
    let randStr = randomString({
      length: 12,
      numeric: true,
      letters: false,
      special: false
    });

    return (
      <div className="welcomeMsg">
        <Moment format="MMM D YYYY HH:mm">{new Date()}</Moment>
        <div>Reference number: {randStr}</div>
        <div>Welcome{this.state.user}!</div>
      </div>
    );
  }
  
  render() {
    return (
      <main>
        <this.welcomeMsg />
      </main>
    );
  }
}
import React from 'react';
import Moment from 'react-moment';
import '../style/components/Main.scss';

export default class Main extends React.Component {

  state = {
    user: ' sir & madam'
  };

  welcomeMsg = () => {
    return (
      <div className="welcomeMsg">
        <Moment format="MMM D YYYY HH:mm">{new Date()}</Moment>
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
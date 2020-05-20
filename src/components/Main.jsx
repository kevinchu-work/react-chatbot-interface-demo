import React from 'react';
import Moment from 'react-moment';
import '../style/components/Main.scss';

export default class Main extends React.Component {


  welcomeMsg = () => {
    return (
      <span className="welcomeMsg">
        <Moment format="MMM D YYYY HH:mm">{new Date()}</Moment>
      </span>
    );
  }

  render() {
    return (
      <main>
        <this.welcomeMsg></this.welcomeMsg>
      </main>
    );
  }
}
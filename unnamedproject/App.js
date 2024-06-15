import log from './logging';

log("App", "Initializing...");
import React from 'react';
import Nav from './navigation/main_nav';

export default class App extends React.Component {
  render(){
    return (
      <Nav />
    );
  }
}

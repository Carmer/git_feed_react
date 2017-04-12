import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header.js'
import EventList from './EventList.js'
import '../stylesheets/App.css';

class GitFeed extends Component {
  constructor(){
    super();
    this.state = { events: [] };
  }

  componentDidMount(){
    this.getEvents();
  }

  getEvents(){
    axios.get("http://api.github.com/users/Carmer/received_events?page=1&per_page=100&access_token=7a50148f1cdd5f6e3f990096de1fd0431f18370b")
         .then( response => {
                 this.setState({events: response.data});
               })
  }

  selectActive(id) {
    let events = this.state.events.map( event =>  {
      return Object.assign(event, {active: id === event.id ? !event.active : false})
    });

    this.setState(events: events)
  }

  render() {
    return (
      <div className="GitFeed">
        <Header/>
        <p className="GitFeed-intro">Welcome to Git_Feed. Let's explore...</p>
        <EventList events={this.state.events}
                   selectActive={ this.selectActive.bind(this) } />
      </div>
    );
  }
}

export default GitFeed;

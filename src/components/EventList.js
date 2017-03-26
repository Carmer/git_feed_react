import React, {Component} from 'react';
import EventCard from './EventCard';

class EventList extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <div className="EventList container" >
        {this.props.events.map(event =>
          <EventCard {...event} key={event.id}
                      selectActive={this.props.selectActive}/>
        )}
      </div>
    )
  }

}

export default EventList;

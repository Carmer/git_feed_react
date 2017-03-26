import React, {Component} from 'react';
import '../stylesheets/Card.css'
import javascript_time_ago from 'javascript-time-ago'

// Load locale specific relative date/time messages
//
javascript_time_ago.locale(require('javascript-time-ago/locales/en'))
javascript_time_ago.locale(require('javascript-time-ago/locales/ru'))

// Load number pluralization functions for the locales.
// (the ones that decide if a number is gonna be
//  "zero", "one", "two", "few", "many" or "other")
// http://cldr.unicode.org/index/cldr-spec/plural-rules
// https://github.com/eemeli/make-plural.js
// http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
//
require('javascript-time-ago/intl-messageformat-global')
require('intl-messageformat/dist/locale-data/en')
require('intl-messageformat/dist/locale-data/ru')

// Initialization complete.
// Ready to format relative dates and times.




// =======================================================


const EventCard = ({actor, created_at, id, org, payload, repo, type, active, selectActive}) => {

  const time_ago_english = new javascript_time_ago('en-US');

  return(
    <div className={active ? 'card active' : 'card'} onClick={ () => {selectActive(id)} } >
      <div className="card-content">
        <div>
          <a href={"http://github.com/" + actor.login }>
            <h5>{actor.login}</h5>
            <img className="circle img-avatar" src={actor.avatar_url} />
          </a>
        </div>
        <div>
          <h3>{type}</h3>
          <h4 className="time">{ time_ago_english.format(new Date(created_at)) }</h4>
            Repository: <a className="repo-link" href={repo.url}>{repo.name}</a>
        </div>
      </div>
    </div>
  )
}

export default EventCard;

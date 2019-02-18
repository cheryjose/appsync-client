import * as React from 'react'
import {render } from 'react-dom'
import { SportsForm } from './client'
import { DataComponent, buildQuery } from './data'


const events = [ 
    { startDateUTC: '2019-2-4', home: 'Eagle', description: 'Eagle vs Docker' },
    { startDateUTC: '2019-2-5', home: 'Gws', description: 'Cats vs Carlton' },
    { startDateUTC: '2019-2-6', home: 'Eagle', description: 'Eagle vs Melbourne' },        
]

function SportsFormView({ home }) {
  return class extends React.Component {
      render() {
          return <div>{home}</div>
      }
  }
}

function SportsFormWithData({ startDateUTC, home }) {
    return DataComponent(buildQuery({ startDateUTC, home }), SportsFormView({ home }))
}
function EventListItems() {
    return events.map((event, index) => {
        return <li key={index}>
        <div>
            <span>Event:</span>
            <span>{event.description}</span>
            <SportsForm >
             <SportsFormWithData startDateUTC={event.startDateUTC} home={event.home} />
            </SportsForm>
        </div>
    </li>
    })
}

function Events() {
    return <ul>
        {EventListItems()}
    </ul>
}

function App() {
    return <div>
        <Events />
    </div>
}
render(<App />, document.getElementById("root"))

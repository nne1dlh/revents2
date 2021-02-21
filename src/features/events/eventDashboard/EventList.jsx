import React, { Fragment } from 'react';
import EventListItem from './EventListItem';

export default function EventList({ events, selectEvent, delEvent }) {
    console.log('piss2', selectEvent);

    return (
        <Fragment>
            {events.map(x => <EventListItem e={x} key={x.id} selectEvent={selectEvent} delEvent={delEvent} />)}

        </Fragment>

    )
}
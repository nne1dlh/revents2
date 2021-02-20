import React, { Fragment } from 'react';
import EventListItem from './EventListItem';

export default function EventList({ events }) {
    return (
        <Fragment>
            {events.map(x => <EventListItem e={x} key={x.id} />)}

        </Fragment>

    )
}
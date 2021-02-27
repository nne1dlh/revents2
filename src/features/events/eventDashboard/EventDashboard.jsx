import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';


export default function EventDashboard(props) {
    // const { formOpen, setFormOpen, selectEvent, selectedEvent } = props;

    const [events, setEvents] = useState(sampleData);


    // function handleCreateEvent(event) {
    //     setEvents([...events, event])
    // }

    // function handleUpdateEvent(updEvent) {
    //     setEvents(events.map(e => e.id === updEvent.id ? updEvent : e));
    //     selectEvent(null);
    // }

    function handleDeleteEvent(eventId) {
        setEvents(events.filter(e => e.id !== eventId));
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} delEvent={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                <h2>Event filters</h2>
            </Grid.Column>
        </Grid>
    )

};


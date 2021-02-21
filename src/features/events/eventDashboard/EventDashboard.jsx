import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';


export default function EventDashboard(props) {
    const { formOpen, setFormOpen, selectEvent, selectedEvent } = props;

    const [events, setEvents] = useState(sampleData);


    function handleCreateEvent(event) {
        setEvents([...events, event])
    }

    function handleUpdateEvent(updEvent) {
        setEvents(events.map(e => e.id === updEvent.id ? updEvent : e));
        selectEvent(null);
    }

    function handleDeleteEvent(eventId) {
        setEvents(events.filter(e => e.id !== eventId));
    }

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} delEvent={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&
                    (<EventForm
                        setFormOpen={setFormOpen}
                        setEvents={setEvents}
                        createEventP={handleCreateEvent}
                        selectedEvent={selectedEvent}
                        key={selectedEvent ? selectedEvent.id : null}
                        updateEvent={handleUpdateEvent} />)}
            </Grid.Column>
        </Grid>
    )

};


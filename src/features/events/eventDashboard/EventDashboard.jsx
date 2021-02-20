import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';


export default function EventDashboard(props) {
    const [events, setEvents] = useState(sampleData);
    const { formOpen, setFormOpen } = props;


    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen &&
                    <EventForm setFormOpen={setFormOpen} />}
            </Grid.Column>
        </Grid>
    )

};


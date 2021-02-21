import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';

export default function EventForm(props) {

    const { setFormOpen, setEvents, createEventP, selectedEvent, updateEvent } = props;

    const initVals = selectedEvent ?? {  //null conditional operator
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: '',
    };


    const [values, setVals] = useState(initVals);

    function handleFormSubmit() {
        selectedEvent ? updateEvent({ ...selectedEvent, ...values }) : //using handleupdateEvent in dashboard
            createEventP({
                ...values,
                id: cuid(),
                hostedBy: 'Roberta',
                attendees: [],
                hostPhotoURL: '/assets/user.png'
            });
        setFormOpen(false);
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setVals({ ...values, [name]: value })
    }

    return (
        <Segment clearing>
            <Header content={selectedEvent ? "Edit this event" : 'Create new event'} />
            <Form onSubmit={handleFormSubmit}>
                <Form.Field>
                    <input type='text'
                        placeholder='Eventr Title' value={values.title} onChange={e => handleInputChange(e)} name='title' />
                </Form.Field >
                <Form.Field>
                    <input type="text" placeholder='Category' value={values.category} onChange={e => handleInputChange(e)} name='category' />
                </Form.Field >
                <Form.Field>
                    <input type="text" placeholder='Description' value={values.description} onChange={e => handleInputChange(e)} name='description' />
                </Form.Field >
                <Form.Field>
                    <input type="text" placeholder='City' value={values.city} onChange={e => handleInputChange(e)} name='city' />
                </Form.Field >
                <Form.Field>
                    <input type="text" placeholder='Venue' value={values.venue} onChange={e => handleInputChange(e)} name='venue' />
                </Form.Field >
                <Form.Field>
                    <input type="date" placeholder='Date' value={values.date} onChange={e => handleInputChange(e)} name='date' />
                </Form.Field >
                <Button type="submit" floated='right' positive content='Submit' />
                <Button onClick={() => setFormOpen(false)} type="submit" floated='right' content='Cancel' />

            </Form>
        </Segment>
    )
}
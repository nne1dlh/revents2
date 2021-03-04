import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';

export default function EventForm(props) {
    const { match, history } = props;
    const dispatch = useDispatch();

    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));

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
        selectedEvent ? dispatch(updateEvent({ ...selectedEvent, ...values })) :
            dispatch(createEvent({
                ...values,
                id: cuid(),
                hostedBy: 'Roberta',
                attendees: [],
                hostPhotoURL: '/assets/user.png'
            }));
        history.push('/events');
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
                <Button as={Link} to='/events' type="submit" floated='right' content='Cancel' />

            </Form>
        </Segment>
    )
}
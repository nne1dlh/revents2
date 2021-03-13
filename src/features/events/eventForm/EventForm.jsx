import React from 'react';
import { Button, Header, Segment } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';
import MySelectInput from '../../../app/common/form/MyDropDown';
import { categoryData } from '../../../app/api/categoryOptions';
import MyDateInput from '../../../app/common/form/MyDateInput';

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

    const validationSchema = Yup.object({
        title: Yup.string().required('You must provide title'),
        category: Yup.string().required('You must provide category'),
        description: Yup.string().required(),
        city: Yup.string().required(),
        venue: Yup.string().required(),
        date: Yup.string().required()
    })



    return (
        <Segment clearing>

            <Formik
                initialValues={initVals}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    selectedEvent ? dispatch(updateEvent({ ...selectedEvent, ...values })) :
                        dispatch(createEvent({
                            ...values,
                            id: cuid(),
                            hostedBy: 'Roberta',
                            attendees: [],
                            hostPhotoURL: '/assets/user.png'
                        }));
                    history.push('/events');
                }}
            >
                {({ isSubmitting, dirty, isValid }) => (
                    <Form className='ui form' >
                        <Header sub color='teal' content='Event Detail' />
                        <MyTextInput name='title' placeholder='Event title' />
                        {/* <FormField>
                        <Field name='title' placeholder='Event Title' />
                        <ErrorMessage name='title' render={error => <Label basic color='red' content={error} />} />
                    </FormField > */}

                        <MySelectInput name='category' placeholder='Event category' options={categoryData} />
                        <MyTextArea name='description' placeholder='Description' rows={3} />
                        <Header sub color='teal' content='Event Location Deats' />
                        <MyTextInput name='city' placeholder='City' />
                        <MyTextInput name='venue' placeholder='Venue' />
                        <MyDateInput
                            name='date'
                            placeholderText='Event Date'
                            timeFormat='HH:mm'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm a' />

                        <Button loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} type="submit" floated='right' positive content='Submit' />
                        <Button disabled={isSubmitting} as={Link} to='/events' type="submit" floated='right' content='Cancel' />
                    </Form>
                )}
            </Formik>
        </Segment >
    )
}
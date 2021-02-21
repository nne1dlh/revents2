import React from 'react';
import { Icon, Item, Segment, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

export default function EventListItem(props) {

    const { e, selectEvent, delEvent } = props;
    console.log("piss", selectEvent);

    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={e.hostPhotoURL} />
                        <Item.Content>
                            <Item.Header content={e.title} />
                            <Item.Description>
                                Hosted by {e.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {e.date}
                    <Icon name='marker' />{e.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {e.attendees.map(attendee => <EventListAttendee key={attendee.id} attendee={attendee} />
                    )}

                </List>
            </Segment>
            <Segment clearing>
                <div>{e.description}</div>
                <Button onClick={() => delEvent(e.id)} color='teal' floated='right' content='delete' />
                <Button onClick={() => selectEvent(e)} color='teal' floated='right' content='view' />
            </Segment>
        </Segment.Group>
    )
}
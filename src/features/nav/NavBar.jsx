import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar(props) {
    const { setFormOpen } = props;

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt='logo' style={{ marginRight: 15 }} />
                    Re-Vents
                </Menu.Item>
                <Menu.Item name='Eventsp' />
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
                </Menu.Item>

            </Container>

        </Menu>

    )
}
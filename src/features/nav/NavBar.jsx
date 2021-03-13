import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';
import { useSelector } from 'react-redux';

export default function NavBar(props) {
    //const { setFormOpen } = props;
    const { auth } = useSelector(state => state.auth); //from store



    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt='logo' style={{ marginRight: 15 }} />
                    Re-Vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Eventsp' />
                <Menu.Item as={NavLink} to='/sandbox' name='SandBox' />
                {auth &&
                    <Menu.Item as={NavLink} to='/createEvent'>
                        <Button positive inverted content='Create Event' />
                    </Menu.Item>}
                {auth ? <SignedInMenu /> : <SignedOutMenu />}

            </Container>

        </Menu>

    )
}
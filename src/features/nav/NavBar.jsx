import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import SignedOutMenu from './SignedOutMenu';
import SignedInMenu from './SignedInMenu';

export default function NavBar(props) {
    const history = useHistory();
    const { setFormOpen } = props;
    const [auth, setAuth] = useState(false);

    function handleSignOut() {
        setAuth(false);
        history.push('/');
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} exact to='/' header>
                    <img src="/assets/logo.png" alt='logo' style={{ marginRight: 15 }} />
                    Re-Vents
                </Menu.Item>
                <Menu.Item as={NavLink} to='/events' name='Eventsp' />
                {auth &&
                    <Menu.Item as={NavLink} to='/createEvent'>
                        <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
                    </Menu.Item>}
                {auth ? <SignedInMenu signOut={handleSignOut} /> : <SignedOutMenu setAuth={setAuth} />}

            </Container>

        </Menu>

    )
}
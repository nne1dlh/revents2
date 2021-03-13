import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Image, Dropdown, Menu } from 'semantic-ui-react';
import { signOutUser } from '../auth/authActions';

export default function SignedInMenu() {
    const dispatch = useDispatch();
    const { curUser } = useSelector(state => state.auth);

    const history = useHistory();
    return (
        <Menu.Item position='right'>
            <Image avatar spaced='right' src={curUser.photoURL || '/assets/user.png'} />
            <Dropdown pointing='top left' text={curUser.email} >
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
                    <Dropdown.Item text='My Profile' icon='user' />
                    <Dropdown.Item
                        onClick={() => {
                            dispatch(signOutUser());
                            history.push('/');
                        }
                        } text='Sign Out' icon='power' />
                </Dropdown.Menu>

            </Dropdown>
        </Menu.Item>
    )
}
import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
    Wrapper, NavbarWrapper,
    Logo, NavbarBody, Container, activeStyle
} from './style';

import { navbar } from '../../utilis/Navbar';
import  Button  from '../Generics/Button';

export const Navbar = () => {
    const navigate = useNavigate()

    const gotoLogin = () => {
        navigate('/signin')
    }

    return (
        <Wrapper>
            <Container>
                <NavbarWrapper>
                    <Logo onClick={() => navigate('/home')}>
                        <Logo.Icon />
                        <Logo.Title>Housing</Logo.Title>
                    </Logo>
                    <NavbarBody>
                        {navbar.map(value => {
                            return !value.hidden && (
                                <NavLink style={activeStyle} key={value.id} to={value.path}>
                                    {value.title}
                                </NavLink>
                            )
                        })}
                    </NavbarBody>
                    <Logo>
                        <Button onClick={gotoLogin} width={'120px'} >Signin</Button>
                    </Logo>
                </NavbarWrapper>
            </Container >
            <Outlet />

        </Wrapper >

    )
}
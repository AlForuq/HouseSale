import React from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
    Wrapper, NavbarWrapper,
    Logo, NavbarBody, Container, activeStyle
} from './style';

import { navbar } from '../../utilis/Navbar';
import  Button  from '../Generics/Button';
import { Footer } from '../Footer';

export const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const LogIn = () => {
        navigate('/signin')
    }

    const LogOut = () => {
        localStorage.removeItem('token')
        if (location?.pathname?.includes('profile')) {
            navigate('/home')
        }
        else {
            navigate('/signin')
        }
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
                        {localStorage.getItem('token') ? (
                            <>
                                <Button onClick={()=> navigate('/profile/properties')} mr={20} width={'131px'} >Profile</Button>
                                <Button onClick={LogOut} width={'131px'} >Log out</Button>
                            </>
                        ) : <Button onClick={LogIn} width={'120px'} >Log in</Button> }
                    </Logo>
                </NavbarWrapper>
            </Container >
            <Outlet />
            <Footer/>
        </Wrapper >

    )
}
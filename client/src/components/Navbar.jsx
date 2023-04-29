import React from 'react'
import {AppBar,Toolbar,styled} from '@mui/material';
import{NavLink} from 'react-router-dom';

const Header = styled(AppBar)`
            background: #111111; `;
const Tabs = styled(NavLink)`
            font-size: 20px;
            margin-right: 20px;
            color:inherit;
            text-decoration:none; `;

const Navbar=()=> {
  return (
    <div>
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>MERN CRUD</Tabs>
                <Tabs to='/add'>ADD USER</Tabs>
                <Tabs to='/all'>ALL USER</Tabs>
            </Toolbar>
        </Header>
    </div>
  )
}

export default Navbar;

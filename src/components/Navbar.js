import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
          <Link to="/">
            <IconButton>
                <AcUnitIcon sx={{color: "#fff", fontSize: 40}} />
            </IconButton>
          </Link>
            <Typography variant='h4'>snow Login</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar;
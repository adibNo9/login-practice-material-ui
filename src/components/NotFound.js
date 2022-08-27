import React from 'react';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';

const NotFound = () => {
  return (
    <Container maxWidth="sm" align="center" style={{marginTop: 60}}>
            <DoNotDisturbOnIcon sx={{color: "#b81b2e", fontSize: 60}} />
            <Typography variant='h4'>
                Page Not Found!
            </Typography>
        </Container >
  )
}

export default NotFound;
import { Button, Card, Container } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
 
const Home = ({ logout, isUserloggedIn, userName }) => {
  const logoutHandler = () => {
    logout();
  }

  return (
    <Container maxWidth="sm" align="center">
        <Card variant="outlined" style={{marginTop: 50, padding: 20}}>
        <h2>Welcome {userName}</h2>
        {isUserloggedIn ? <Button onClick={logoutHandler} type='submit' color='secondary' variant="contained"  style={{marginTop: 20}}>Logout</Button> :
          <Link to="/login" style={{textDecoration: "none"}}> <Button color='primary' variant="contained"  style={{marginTop: 20}}>Login</Button> </Link>  }
        </Card>
        
    </Container>
  )
}

export default Home;
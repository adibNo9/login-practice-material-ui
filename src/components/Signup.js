import { Avatar, Button, Grid, Paper, TextField } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {makeStyles} from '@mui/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup 
  .string('Enter your username')
  .min(4, 'Username should be of minimum 4 characters length')
  .required('Username is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const useStyles = makeStyles({
  paperStyle: {
    padding: 20, 
    width: 300, 
    margin: "50px auto" 
  }
});

const Signup = ({ signup }) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      signup(values);
      navigate("/login")
    }
  }) 

  return (
    <Grid>
        <Paper elevation={3} className={classes.paperStyle}>
            <Grid container alignItems="center" justifyContent="center" direction="column">
                <Avatar style={{backgroundColor: "#1565c0"}}>
                    <PersonAddIcon />
                </Avatar>
                <h2>Sign Up</h2>
            </Grid>
            <form onSubmit={formik.handleSubmit}>
            <TextField
              id="standard-basic"
              name='username' 
              label="Username"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
               variant="standard" 
               focused  
               color='secondary' 
               fullWidth 
               required 
               style={{marginTop: 20}} />
            <TextField
              id="email" 
              name="email" 
              label="Email" 
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="standard" 
              focused  
              color='secondary' 
              fullWidth 
              required 
              style={{marginTop: 20}} />
            <TextField
              id="password" 
              name="password" 
              label="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              variant="standard" 
              focused  
              color='secondary' 
              fullWidth 
              required 
              style={{marginTop: 20}}  />
            <Button type='submit' color='primary' variant="contained" fullWidth style={{marginTop: 20}}>Sign Up</Button>
            </form>
        </Paper>
    </Grid>
  )
}

export default Signup
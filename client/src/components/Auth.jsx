import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { GoogleLogin } from 'react-google-login'
import AuthInput from './AuthInput'
import Icon from './icon'

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup)
    setShowPassword(false)
  }

  const googleSuccess =  async (res) => {
    console.log(res)
  }

  const googleFailure = (error) => {
    console.log(error)
    console.log("Google sign in unsuccessful. Please try again,");
  }


  return (
    <Container component="main" maxWidth="xs" sx={{ marginTop: '200px', width: { md: '40%', sm: '50%', xs: '90%' } }}>
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Avatar  sx={{ marginLeft: '45%', backgroundColor: '#991408' }}>
          <LockOutlinedIcon />
        </Avatar>
          <Typography variant="h5" sx={{ marginBottom: 2, color: '#991408' }}>{isSignup ? "Sign Up" : "Sign In"}</Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                  <>
                    <AuthInput name="firstName" label="First Name" handleChange={handleChange} autofocus half />
                    <AuthInput name="lastName" label="Last Name" handleChange={handleChange} autofocus half />
                  </>
              )}
              <AuthInput name="email" label="Email Address" handleChange={handleChange} type="email" />
              <AuthInput name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
              {isSignup && <AuthInput name="cpassword" label="Confirm Password" handleChange={handleChange} type="password" />}
            </Grid>
            <Button type="submit" variant="contained" sx={{ width: '100%', padding: 1, marginTop: 2, backgroundColor: '#991408' }}>
              {isSignup ? 'Sign Up' : 'Sign In'}
            </Button>
            <GoogleLogin
              clientId="140492617909-anrkhjs44j0omekjt9s1s0cu791mjchv.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  sx={{ width: '100%', marginTop: 2, padding: 1, backgroundColor: '#991408', color: '#fff' }} 
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled} 
                  startIcon={<Icon />} 
                  variant="contained">
                    Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
            <Grid container justify="flex-end">
              <Grid item xs={12} sx={{ width: '100%' }}>
                <Button sx={{ color: '#991408' }} onClick={switchMode}>{isSignup ? "Already have an account? Sign in" : "New User? Create an Account"}</Button>
              </Grid>
            </Grid>
          </form>
      </Paper>
    </Container>
  )
}

export default Auth
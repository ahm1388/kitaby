import React, { useEffect, useState } from 'react'
import GroupForm from './GroupForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container } from '@mui/material'

const Home = () => {
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const navigate = useNavigate()

  useEffect(() => {
    const token = user?.token

    // JWT...
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  return (
    <>
      <Container sx={{ position: 'fixed', marginTop: {md: '150px', sm: '100px', xs: '50px'}, width: {md: '30%', sm: '50%', xs: '60%'}, marginLeft: {md: '35%', sm: '25', xs: '15%'} }}>
        {/* <a href="/BookResults">All book groups</a> */}
        <Button sx={{ color: '#991408' }} onClick={() => navigate('/bookresults')}>All book groups</Button>
      </Container> 
      <GroupForm />
    </>
  )
}

export default Home
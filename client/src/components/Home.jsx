import React, { useEffect, useState } from 'react'
import GroupForm from './GroupForm'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  useEffect(() => {
    const token = user?.token

    // JWT...
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  return (
    <>
      <a href="/BookResults">All book groups</a>
      <GroupForm />
    </>
  )
}

export default Home
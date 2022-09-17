import React from 'react'
import BookCard from "./BookCard"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGroups } from '../actions/groups'

import CircularProgress from '@mui/joy/CircularProgress'
import Grid from '@mui/material/Grid'

const BookResults = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGroups())
  }, [dispatch])
  const groups = useSelector((state) => state.groups)

  return (
    !groups.length ? <CircularProgress /> :
    <>
      {groups.map((group) => (
        <Grid key={group._id}>
          <BookCard
            title={group.title} 
            author={group.author} 
            description={group.description} 
            img={group.selectedFile}
            createdBy={group.createdBy}
            signups={group.signups}
            capacity={group.capacity}
          />
        </Grid>
      ))}
    </>
  )
}

export default BookResults
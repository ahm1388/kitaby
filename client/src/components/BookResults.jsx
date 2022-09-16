import React from 'react'
import BookCard from "./BookCard"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGroups } from '../actions/groups'

import mockingbird from '../images/mockingbird.jpeg'
import CircularProgress from '@mui/joy/CircularProgress'
import Grid from '@mui/material/Grid'

const BookResults = () => {
  const title = "To Kill a Mockingbird"
  const author = "Harper Lee"
  const description = "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools."
  const createdBy = 'Ahmed Ammar'
  const signups = 15
  const capacity = 40

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(getGroups())
  }, [dispatch])
  const groups = useSelector((state) => state.groups)

  return (
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
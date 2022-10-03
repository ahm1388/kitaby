import { CircularProgress, Divider, Grid, Paper, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getGroup } from '../actions/groups'

const GroupDetails = () => {
    const { id, title, author, description, createdBy } = useParams()
    
  return (
    <Paper sx={{ padding: '20px', borderRadius: '15px', width: {md: '90%', sm: '95%', xs: '85%'}, marginLeft: {md: '4%', sm: '0%', xs: '2%'} , marginTop: '40px' }} elevation={6}>
      <Grid container spacing={1} direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={4}>
          <Typography>TESTING</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6">{author}</Typography>
          <Typography variant="subtitle1">{description}</Typography>
          <Divider sx={{ margin: '20px 0' }}><Typography variant="subtitle2">Comments</Typography></Divider>
          <Typography>This is {createdBy}'s page</Typography>
        </Grid>

      </Grid>
    </Paper>
  )
}

export default GroupDetails
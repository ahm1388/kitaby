import { CircularProgress, Divider, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getGroup } from '../actions/groups'
import CommentSection from './CommentSection'

const GroupDetails = () => {
  const { group, groups, isLoading } = useSelector((state) => state.groups)
  const { id } = useParams()
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getGroup(id))
    }, [dispatch])

    if (!group) return null
    if (isLoading) return 
    
  return (
    <Paper sx={{ padding: '20px', borderRadius: '15px', width: {md: '90%', sm: '95%', xs: '85%'}, marginLeft: {md: '4%', sm: '0%', xs: '2%'} , marginTop: '40px' }} elevation={6}>
      <Grid container spacing={1} direction={{ xs: 'column', md: 'row' }}>
        <Grid item xs={4}>
          <Box
              component="img"
              justifyContent="flex-end"
              sx={{
                marginTop: '25px',
                marginBottom: '25px',
                alignContent: 'center',
                width: {md: 400, sm: '50%', xs: '50%'},
                height: 'auto'
              }}
              alt={group.title}
              src={group.selectedFile}
            />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h4">{group.title}</Typography>
          <Typography variant="h6">{group.author}</Typography>
          <Typography variant="subtitle1">{group.description}</Typography>
          <Divider sx={{ margin: '20px 0' }}><Typography variant="subtitle2">Comments</Typography></Divider>
          <CommentSection group={group} />
        </Grid>

      </Grid>
    </Paper>
  )
}

export default GroupDetails
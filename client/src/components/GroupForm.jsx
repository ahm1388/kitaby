import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createGroup } from '../actions/groups'


const GroupForm = () => {
  const [groupData, setGroupData] = useState({title: '', author: '', description: '', selectedFile: '', createdBy: 'Ahmed', signups: 0, capacity: 0})
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createGroup(groupData))
    clear()
  }

  const clear = () => {
    setGroupData({title: '', author: '', description: '', selectedFile: '', createdBy: 'Ahmed', signups: 0, capacity: 0})
  }

  return (
    <Paper sx={{ padding: 2, width: {md: '40%', xs: '60%'}, marginLeft: {md: '30%', xs: '20%'}, marginTop: '100px', borderRadius: '10px' }}>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Typography variant="h6" sx={{ marginBottom: 2, backgroundColor: '#991408', color: 'white', padding: 2, borderRadius: '10px 10px 0 0' }}>Create a Book Group</Typography>
            <TextField sx={{ marginBottom: 2 }} name="title" variant="outlined" label="Title" fullWidth value={groupData.title} onChange={(e) => setGroupData({ ...groupData, title: e.target.value })}/>
            <TextField sx={{ marginBottom: 2 }} name="author" variant="outlined" label="Author" fullWidth value={groupData.author} onChange={(e) => setGroupData({ ...groupData, author: e.target.value })}/>
            <TextField sx={{ marginBottom: 2 }} name="description" variant="outlined" label="Book Description" fullWidth value={groupData.description} onChange={(e) => setGroupData({ ...groupData, description: e.target.value })}/>
            <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{ marginBottom: 2 }} name="capacity" variant="outlined" label="Group Capacity" fullWidth value={groupData.capacity} onChange={(e) => setGroupData({ ...groupData, capacity: e.target.value })}/>
            <div><FileBase type="file" multiple={false} onDone={({base64}) => setGroupData({ ...groupData, selecterFile: base64 })} /></div>
            <Button variant="contained" sx={{ backgroundColor: '#991408', marginBottom: 2, marginTop: 2 }} size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" sx={{ backgroundColor: '#991408', opacity: 0.6 }} size="small" onClick={clear} fullWidth>Clear</Button>
        </form>
    </Paper>
  )
}

export default GroupForm    
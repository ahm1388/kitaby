import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import GroupDetails from './GroupDetails';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const BookCard = ({ id, title, author, description, img, createdBy, signups, capacity }) => {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('profile'))
  
  return (
    <div>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{
          margin: '30px 10%',
          width: '80%'
        }}
      >
        <Item sx={{
          display: 'flex',
          flexDirection: {md: 'row', sm: 'column', xs: 'column'},
          overflowY: 'auto',
          border: 2,
          borderColor: '#991408',
          backgroundColor: '#FAD0A2'
        }}>
          <Box
            component="img"
            justifyContent="flex-end"
            sx={{
              marginTop: '25px',
              marginBottom: '25px',
              marginLeft: {md: '20px', sm: '30%', xs: '30%' },
              width: {md: 200, sm: '40%', xs: '40%'},
              height: 'auto'
            }}
            alt={title}
            src={img}
          />
          <Box className='book-info' sx={{ textAlign: 'justify', margin: '0 20px' }}>
            <Typography variant="h4" sx={{ fontSize: {md: 30, sm: 30, xs: 20}, color: '#991408' }}>{title}</Typography>
            <Typography variant="h6" sx={{ fontSize: {md: 18, sm: 18, xs: 14}, color: '#991408', opacity: 0.7 }}>{author}</Typography>
            <Typography variant = "span" sx={{
              margin: 2
            }}>
                {description}
            </Typography>
              <Typography variant="subtitle2" color="#991408" sx={{ opacity: 0.6, marginTop: 3 }}>Created by: {createdBy}</Typography>
            <Stack spacing={1} direction="row" sx={{ display: 'flex', marginTop: {md: 15, sm: 2, xs: 2}, marginBottom: 2 }}>
              {/* <Button variant="outlined" sx={{ left: { md: '40%', sm: '30%', xs: '20%'}, width: {md: '10%', sm: '20%', xs: '30%'}, borderColor: '#991408', color: '#991408', height: 40 }}>{signups}/{capacity}</Button> */}
              {user?.result?.name ?
              <Button variant="contained" onClick={() => navigate(id)} sx={{ left: { md: '45%', sm: '40%', xs: '30%'}, width: {md: '10%', sm: '20%', xs: '30%'}, backgroundColor: '#991408' }}>View</Button>
              :
              <Button variant="contained" onClick={() => navigate('../auth')} sx={{ left: { md: '45%', sm: '40%', xs: '30%'}, width: {md: '10%', sm: '20%', xs: '30%'}, backgroundColor: '#991408' }}>Login</Button>}
            </Stack>
          </Box>
        </Item>
      </Stack>
    </div>
  )
}

export default BookCard
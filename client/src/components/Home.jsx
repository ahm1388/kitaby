import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import mockingbird from '../images/mockingbird.jpeg'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = () => {
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
          height: {md: 300, sm: 500, xs: 550},
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
              marginLeft: '20px',
              width: {md: 200, xs: 150},
              height: 'auto'
            }}
            alt="How to Kill a Mockingbird"
            src={mockingbird}
          />
          <Box className='book-info'>
            <Typography variant="h4" sx={{ marginTop: 2.5, fontSize: {md: 30, sm: 30, xs: 20}, color: '#991408' }}>To Kill a Mockingbird</Typography>
            <Typography variant="h6" sx={{ fontSize: {md: 18, sm: 18, xs: 14}, color: '#991408', opacity: 0.7  }}>Harper Lee</Typography>
            <Typography variant = "span" sx={{
              marginLeft: 2,
              marginRight: 2,
              textAlign: 'justify'
            }}>
              To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize.
            </Typography>
            <Stack container spacing={1} direction="row" sx={{ display: 'flex', marginTop: {md: 10, sm: 5, xs: 10} }}>
              <Button variant="outlined" sx={{ left: {md: '40%', sm: '40%', xs: '30%'}, bottom: 0, width: 30, color: '#991408', borderColor: '#991408', height: 40 }}>11/40</Button>
              <Button variant="contained" sx={{ left: {md: '40%', sm: '40%', xs: '30%'}, width: 30, backgroundColor: '#991408', height: 40 }}>Join</Button>
            </Stack>
          </Box>

          
        </Item>
      </Stack>
    </div>
  )
}

export default Home
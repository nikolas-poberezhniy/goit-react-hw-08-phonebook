import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container sx={{ mt: { xs: '5px', sm: '20px' } }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center' }}>
        Save all useful contacts in one place. Join and don't forget no one!
      </Typography>
    </Container>
  );
};

export default HomePage;

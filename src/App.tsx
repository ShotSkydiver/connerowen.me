import { Container, Typography, Box, Link } from '@mui/material';
import ProTip from './ProTip';

const Copyright = () => {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Material UI Vite example in TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}

export default App;

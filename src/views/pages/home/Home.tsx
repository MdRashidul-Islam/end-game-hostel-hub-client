import { Typography } from '@mui/material';
import { Box } from '@mui/system';

function Home() {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '90vh',
                width: '95vw',
                justifyContent: 'center',
            }}
        >
            <Typography variant="h2" align="center">
                Home page from Tareq Hassan
            </Typography>
        </Box>
    );
}

export default Home;

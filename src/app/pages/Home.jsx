
import React from 'react';
import {
  Grid, Paper, Typography, Box,
} from '@mui/material';
import AccountSelection from '../components/home/AccountSelection';
import { useWindowSize } from '../utils/customHooks';

import CustomCard from '../components/home/CustomCard';
import PrimaryButton from '../components/PrimaryButton';


const centerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function Home({ createAccount, newLogIn, nav }) {
  const { width } = useWindowSize();

  const paperStyles = {
    maxWidth: 250,
    backgroundColor: '#EDFEFF',
    p: 3,
    m: 2,
  };

  const buttons = [];

  if (width < 800) { // mobile rendering
    return (
      <Box sx={{
        display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center',
      }}
      >
        <Paper
          elevation={5}
          square
          sx={{
            width: '100%', backgroundColor: '#EDFEFF', p: 3,
          }}
        >
          <Box sx={{
            display: 'flex', flexDirection: 'column', textAlign: 'center', maxWidth: 250, mr: 'auto', ml: 'auto',
          }}
          >

            <Typography sx={{
              fontWeight: 700, mt: 3, pl: 2, pr: 2,
            }}
            >
              Tracking properties portfolios.
            </Typography>
            <PrimaryButton
              sx={{
                mt: 5, mb: 5, pl: 2, pr: 2, mr: 2, ml: 2,
              }}
              text="Get Started"
            />
            <Typography variant="subtitle2" sx={{ mb: 5, pl: 2, pr: 2 }}>properties.</Typography>
            <Typography sx={{ pl: 2, pr: 2 }} variant="subtitle2">Organize properties.</Typography>
          </Box>
        </Paper>

        <Typography variant="h5" sx={{ fontWeight: 700, m: 3, mt: 5 }}>Almost lunch time!</Typography>

        {buttons.map((buttonData, index) => (
          <Paper elevation={3} sx={paperStyles} key={`buttonData-${index + 1}`}>
            <Typography sx={{ fontWeight: 700, mb: 1 }}>{buttonData[0]}</Typography>
            <Typography variant="caption">{buttonData[2]}</Typography>
          </Paper>
        ))}

        <PrimaryButton sx={{ mt: 3, mb: 3 }} text="Get Started" />
      </Box>

    );
  } // desktop rendering
  return (
    <Grid container item xs={10} direction="column">
      <Grid
        item
        xs={8}
        className="hero"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundSize: 'cover', p: 0,
        }}
      >
        <AccountSelection createAccount={createAccount} newLogIn={newLogIn} nav={nav} />
      </Grid>

      <Grid xs={4} item container sx={[centerStyle]}>
        <Grid item xs={12} sx={centerStyle}>
          <Typography variant="h4" sx={{ m: 3 }}>
            How
            {' '}
            <Typography display="inline" variant="h4" color="secondary" sx={{ fontWeight: 'bold' }}>SquirrelNest</Typography>
            {' '}
            Works
          </Typography>
        </Grid>
        <Grid item container xs={12} sx={[centerStyle]}>
          {buttons.map((buttonData, index) => (
            <Grid item m={4} s={6} key={`Custom-card-${index + 1}`}>
              <CustomCard buttonData={buttonData} centerStyle={centerStyle} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;

import * as React from 'react';
import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';

import Main from '../components/PropertiesList/Main';
import propertiesData from '../components/PropertiesList/propertiesDataSample';

function Dashboard() {
  const [searchResults, setSearchResults] = useState(propertiesData);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <Paper
        elevation={2}
        square
        sx={{
          width: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#EDFEFF', p: 1, mb: 2,
        }}
      >
        <Box sx={{ maxWidth: '50%', width: 1000 }}>

        </Box>
        <Typography sx={{
          textAlign: 'center', display: 'flex', justifyContent: 'center', mb: 1,
        }}
        >
          <Typography sx={{ fontWeight: 700, mr: 1 }}>
            Properties
          </Typography>
          Post something about your property here
        </Typography>
      </Paper>
      <Main propertiesData={searchResults.properties} />
    </Box>
  );
}

export default Dashboard;

import React, { useState, useEffect } from 'react';
import {
  Box, Paper, Typography,
} from '@mui/material';
import axios from 'axios';
import Theme from '../Theme';

import SecondaryButton from '../components/SecondaryButton';

function Properties() {
  const [savedPropertiesList, setProperties] = useState([]);
  const [interestLevel, setInterest] = useState('');
  const sections = ['Applied', 'Extremely Interested', 'Very Interested', 'Interested'];


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
      </Paper>
      <Box sx={{
        display: 'flex', justifyContent: 'center', width: '100%',
      }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, mr: 2 }}>My Properties</Typography>
        {sections.map((section) => (
          <SecondaryButton
            onClick={(e) => console.log(e)}
            value={section}
            text={section}
            selected={section === interestLevel}
          />
        ))}
      </Box>

    </Box>
  );
}

export default Properties;
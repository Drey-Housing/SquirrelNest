import React, { useState, useEffect } from 'react';
import {
  Card, Box, Typography,
} from '@mui/material';
import { Interweave } from 'interweave';
import TimeAgo from 'timeago-react';
// import SavePropertyButton from '../SavePropertyButton/SavePropertyButton';
import PrimaryButton from '../PrimaryButton';

function PropertyItem({
  handleFocus, property, selected, index,
}) {
  const PropertySelect = (selectedProperty) => {
    handleFocus(selectedProperty);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mb: 2, position: 'relative', width: 450, p: 2, backgroundColor: '#EDFEFF', borderColor: '#9096A3', borderRadius: 2, borderWidth: selected ? 3 : 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      }}
    >
      <Typography sx={{ mb: 1 }} variant="h5" component="div">
        {property.name}
      </Typography>
      <Typography sx={{ fontSize: 14, mb: 1, fontWeight: 700 }} color="text.primary" gutterBottom>
        {property.streetAddress}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {property.city}
      </Typography>
      <Typography variant="body2">
        <Interweave content={property.state} />
      </Typography>
      <Box sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 4,
      }}
      >
        <Typography>
          {(property.date)}
        </Typography>
        <PrimaryButton sx={{ mb: 0, mt: 0 }} text="Learn More" onClick={(e) => { PropertySelect(property); }} />

      </Box>
    </Card>
  );
}

export default PropertyItem;

{/* <SavePropertyButton
          sx={{ mb: 0, mt: 0 }}
          index={index}
          property={property}
          boxXs={{
            border: 1, p: 1, bgcolor: '#4A485B', display: 'flex', flexDirection: 'column',
          }}
        /> */}
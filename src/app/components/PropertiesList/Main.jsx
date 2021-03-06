import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import PropertyItem from './PropertyItem';
// import PropertyFocusItem from './PropertyFocusItem';
import propertiesData from './propertiesDataSample.js';

function Main() {
  const [propertiesState, setProperties] = useState(propertiesData.properties);
  const [propertyFocuState, setItem] = useState(propertiesData[0]);

  const mainFocusFunction = (targetPropertyItem) => {
    setItem(targetPropertyItem);
    console.log('Property', targetPropertyItem);
    // console.log('targetPropertyItem from main', targetPropertyItem)
    // console.log('state from main', propertyFocuState)
  };

  // useEffect(() => {
  //   setItem(propertiesData?.[0]);
  // }, [propertiesData]);

  return (

    <Box sx={{
      display: 'flex', maxWidth: 1400, mr: 'auto', ml: 'auto',
    }}
    >
      <Box sx={{
        overflowY: 'auto', maxHeight: 700, width: 600, m: 2, mr: 4,
      }}
      >

      </Box>

    </Box>

  );
}

export default Main;

// box tasks for focus item:
// make border radius curvey
// fill right 5/7ths of screen
// scroll bar (something something overflow)
// horizontal divider between properties
// oneClickApply/detailedApply button
// save Property button

// box tasks for list:
// add buttons
// save Property
// oneClickApply
// scroll barrrr
//<PropertyFocusItem Property={propertyFocuState} />

// this stuff below is meant to be returned in the render function in place of propertyList (maybe)
// {propertiesData.map((property, index) => {
//   console.log(propertyFocuState.url)
//   return property.key === propertyFocuState.key ?
//   <PropertyItem key={`Property-${index + 1}`} selected={true} handleFocus={mainFocusFunction} property={property} /> :
//   <PropertyItem key={`Property-${index + 1}`} handleFocus={mainFocusFunction} property={property} />
// })}
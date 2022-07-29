import * as React from 'react';
import Container from '@mui/material/Container';
import PropertyItem from './PropertyItem';

function PropertiesList({ mainFocusFunction, listOfProperties = [] }) {
  const handleFocusItem = (targetPropertyItem) => {
    mainFocusFunction(targetPropertyItem);
  };

  return (

    <Container>
      {listOfProperties.map((property, index) => (
        <PropertyItem
          key={property.id}
          property={property}
          index={index}
          handleFocus={handleFocusItem}
        />
      ))}
    </Container>
  );
}

export default PropertiesList;
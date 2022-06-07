/* eslint-disable react/prop-types */
import React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function StarRating({ value }) {
  return (
    <Stack spacing={1}>
      <Rating name="read-only" size="small" value={value} precision={0.1} readOnly />
    </Stack>
  );
}

export default StarRating;

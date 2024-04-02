import React from 'react';
import { Box, TextField, Button } from '@mui/material';
export default function Home() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '100%',
      }}
    >
      <Box component='main'>
        <TextField variant='outlined' />
        <Button variant='contained'>Submit</Button>
      </Box>
      <main>
        <input type='text' />
        <button>Submit</button>
      </main>
    </div>
  );
}

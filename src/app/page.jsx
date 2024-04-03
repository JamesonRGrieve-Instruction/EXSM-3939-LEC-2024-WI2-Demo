'use client';
import React, { useContext, useState } from 'react';
import { Box, InputLabel, TextField, Slider, FormHelperText, Button, FormControl, Switch } from '@mui/material';
import { ThemeContext } from './ThemeWrapper';
export default function Home() {
  const [sliderValue, setSliderValue] = useState(0);
  const themeContext = useContext(ThemeContext);
  return (
    <Box
      component='main'
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        component='form'
        sx={{
          maxWidth: '800px',
          width: '80%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          align: 'center',
          gap: '0.5rem',
        }}
      >
        <FormControl>
          <Slider
            id='age'
            valueLabelDisplay='on'
            min={0}
            max={120}
            marks={[
              { label: '0', value: 0 },
              { label: '120', value: 120 },
            ]}
            value={sliderValue}
            onChange={(event) => setSliderValue(event.target.value)}
          />
          <InputLabel htmlFor='age'>Age</InputLabel>
          <FormHelperText>Enter your age.</FormHelperText>
        </FormControl>
        <Box display='grid' gridTemplateColumns='1fr 1fr' gap='0.5rem'>
          <TextField label='First Name' helperText='Enter your first name.' variant='outlined' />
          <TextField label='Last Name' helperText='Enter your last name.' variant='outlined' />
        </Box>

        <Button variant='contained'>Submit</Button>
      </Box>
      <Box display='flex' gap='0.5rem'>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '3px solid #ccc',
            borderRadius: '1rem',
            padding: '0.5rem',
          }}
        >
          <InputLabel htmlFor='dark'>Dark Mode</InputLabel>
          <Switch id='dark' value={themeContext.data.dark} onClick={() => themeContext.mutate((previous) => ({ ...previous, dark: !previous.dark }))} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '3px solid #ccc',
            borderRadius: '1rem',
            padding: '0.5rem',
          }}
        >
          <InputLabel htmlFor='colorblind'>Colorblind Mode</InputLabel>
          <Switch id='colorblind' value={themeContext.data.colorblind} onClick={() => themeContext.mutate((previous) => ({ ...previous, colorblind: !previous.colorblind }))} />
        </Box>
      </Box>
    </Box>
  );
}

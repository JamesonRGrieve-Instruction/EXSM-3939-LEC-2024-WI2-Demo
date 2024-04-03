'use client';
import React, { useContext, useEffect, useState } from 'react';
import { Box, InputLabel, TextField, Slider, FormHelperText, Button, FormControl, Switch, Select, MenuItem } from '@mui/material';
import { lighten, darken } from '@mui/material';
import { ThemeContext } from './ThemeWrapper';
const themeVariants = {
  default: {},
  spring: {
    palette: {
      primary: {
        light: '#F2A6BA',
        main: '#E75D82',
        dark: '#A1173C',
      },
    },
  },
  summer: {
    palette: {
      primary: {
        light: '#5CEB7F',
        main: '#149E37',
        dark: '#094919',
      },
    },
  },
  fall: {
    palette: {
      primary: {
        light: '#F4AE7C',
        main: '#EC8236',
        dark: '#97460C',
      },
    },
  },
  winter: {
    palette: {
      primary: {
        light: '#ABD9D1',
        main: '#81C7BB',
        dark: '#2C6359',
      },
    },
  },
};
export default function Home() {
  const [sliderValue, setSliderValue] = useState(0);
  const [userDefinedTheme, setUserDefinedTheme] = useState({});
  const [selectedTheme, setSelectedTheme] = useState('default');
  const themeContext = useContext(ThemeContext);
  useEffect(() => {
    if (selectedTheme === 'custom') {
      themeContext.mutate((previous) => ({ ...previous, themeOverrides: userDefinedTheme }));
    }
  }, [userDefinedTheme]);
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
        <Select
          label='Theme Variant'
          value={selectedTheme}
          onChange={(event) => {
            themeContext.mutate((previous) => ({ ...previous, themeOverrides: event.target.value === 'custom' ? userDefinedTheme : themeVariants[event.target.value] }));
            setSelectedTheme(event.target.value);
          }}
        >
          <MenuItem value='default'>Default</MenuItem>
          <MenuItem value='spring'>Spring</MenuItem>
          <MenuItem value='summer'>Summer</MenuItem>
          <MenuItem value='fall'>Fall</MenuItem>
          <MenuItem value='winter'>Winter</MenuItem>
          <MenuItem value='custom'>Custom</MenuItem>
        </Select>
        {selectedTheme === 'custom' && (
          <TextField
            label='Primary Colour'
            helperText='Enter the priamry colour.'
            variant='outlined'
            value={userDefinedTheme?.palette?.primary?.main ?? ''}
            onInput={(event) => {
              console.log('Updated Theme', {
                palette: {
                  primary: {
                    light: lighten(event.target.value, 0.4),
                    main: event.target.value,
                    dark: darken(event.target.value, 0.4),
                  },
                },
              });

              setUserDefinedTheme({
                palette: {
                  primary: {
                    light: lighten(event.target.value, 0.4),
                    main: event.target.value,
                    dark: darken(event.target.value, 0.4),
                  },
                },
              });
            }}
          />
        )}
      </Box>
    </Box>
  );
}

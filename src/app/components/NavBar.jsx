import React, { useState } from 'react';
import {
  AppBar, Button, Toolbar, Grid, Popper, Box, Divider, Typography,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useWindowSize } from '../utils/customHooks';
import MobilePopout from './home/MobilePopout';
import Theme from '../Theme';
import SecondaryButton from './SecondaryButton';
import PrimaryButton from './PrimaryButton';

function NavBar({ loggedIn }) {
  const { width } = useWindowSize();
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const AUTHCHECK = false;

  const open = Boolean(anchorEl);
  const id = open ? 'profile-popper' : undefined;

  const ovalStyle = {
    position: 'absolute',
    top: -190,
    right: -180,
    borderRadius: '35%',
    width: 280,
    height: 250,
    backgroundColor: '#4A485B',
  };

  function displayPopover() {
    if (loggedIn) {
      return (
        <Box sx={{
          border: 1, p: 1, bgcolor: '#4A485B', display: 'flex', flexDirection: 'column',
        }}
        >
          <Button
            onClick={() => {
              handleClick();
              navigate('/profile');
            }}
            sx={{ textTransform: 'none' }}
          >
            Profile
          </Button>
          <Divider sx={{ backgroundColor: 'white' }} />
          <Button
            onClick={() => {
              handleClick();
              navigate('/jobs');
            }}
            sx={{ textTransform: 'none' }}
          >
            View Properties
          </Button>
          <Divider sx={{ backgroundColor: 'white' }} />
          <Button
            onClick={() => {
              handleClick();
              navigate('/profile');
            }}
            sx={{ textTransform: 'none' }}
          >
            View Your Portfolio
          </Button>
        </Box>
      );
    }
    return (
      <Box sx={{
        border: 1, p: 1, bgcolor: '#4A485B', display: 'flex', flexDirection: 'column',
      }}
      >
        <Button
          onClick={() => {
            handleClick();
            navigate('/');
          }}
          sx={{ textTransform: 'none' }}
        >
          Sign in to View Profile
        </Button>
      </Box>
    );
  }

  function createNavElements() {
    if (location.pathname === '/dashboard' || location.pathname === '/jobs') {
      return (
        <Box sx={{
          height: 100, display: 'flex', alignItems: 'end', pb: 2,
        }}
        >
          <SecondaryButton text="Find Jobs" selected={location.pathname === '/dashboard'} onClick={() => navigate('/dashboard')} />
          <SecondaryButton text="View Saved Jobs" selected={location.pathname === '/jobs'} onClick={() => navigate('/jobs')} />
          <SecondaryButton text="Calendar" />
        </Box>
      );
    }
    return null;
  }

  if (width < 800) {
    return (
      <Grid item xs={1} sx={[{ zIndex: 2 }, Theme.palette.azure]}>
        <AppBar position="static" elevation={0} style={{ height: '100%' }}>
          <Toolbar sx={{
            justifyContent: 'space-between', position: 'relative', overflow: 'hidden', pr: 0,
          }}
          >

            <Box sx={ovalStyle} />
            <MobilePopout />
          </Toolbar>
        </AppBar>
      </Grid>
    );
  }
  return (
    <Grid item xs={1} sx={[{ zIndex: 2 }, Theme.palette.azure]}>
      <AppBar position="static" elevation={location.pathname === '/dashboard' || location.pathname === '/jobs' ? 0 : 3} style={{ height: '100%' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex' }}>
            <Button onClick={() => navigate('/')}>

            </Button>
            {createNavElements()}
          </Box>

          <Box>
            <Button aria-describedby={id} onClick={handleClick}>

            </Button>

            <Popper id={id} open={open} anchorEl={anchorEl} style={{ zIndex: 3 }}>
              {displayPopover()}
            </Popper>

            <Button onClick={() => navigate('/profile')}>

            </Button>

            <PrimaryButton text="Add Property" sx={{ pl: 2, pr: 2, ml: 2 }} />

          </Box>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default NavBar;

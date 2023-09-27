import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';


const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap:{sm:'122px',xs:'40px'}, mt:{xs:'20px',sm:'32px'},justifyContent:'none',px:'20px' }}>
        <Link to='/'>
            <img src='https://static.vecteezy.com/system/resources/thumbnails/017/504/043/small/bodybuilding-emblem-and-gym-logo-design-template-vector.jpg' alt='logo' style={{width:'48px', height:'48px',margin:'0 20px'}}/>
        </Link>
        <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
            <Link to='/' style={{textDecoration:'none',color:'blue',borderBottom:'3px solid green'}}>Home</Link>
            <a href='#exercises' style={{textDecoration:'none',color:'blue'}} >Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar
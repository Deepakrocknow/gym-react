import React from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'


const HeroBanner = () => {
  return (
    <Box sx={{mt:{xs:'70px',lg:'212px'},ml:{sm:'50px'}}} position='relative' p='20px'>
      <Typography color='orange' fontWeight='600' fontSize='26px'>
         Fitness Club
      </Typography>
      <Typography fontWeight={700} color='blue' sx={{fontSize:{lg:'44px',xs:'40px'}}} mb='23px' mt='30px'>
         Sweat,Smile <br/>and Repeat
      </Typography>
      <Typography color='green' fontSize='22px' lineHeight='35px' mb={4}>
          check out heavy most effective exercises...
      </Typography>
      <Button variant='contained' color='error' href='#exercises'
          sx={{backgroundColor:'blue',padding:'10px'}}
        >Explore Exercises</Button>

      <Typography fontWeight={600}
        color='green'
        sx={{opacity:0.3, display:{lg:'block',xs:'none'}}}
        fontSize='200px'
      >Exercise</Typography>



      <img src= 'https://c4.wallpaperflare.com/wallpaper/104/290/511/muscle-muscle-press-pose-dumbbells-hd-wallpaper-preview.jpg' alt='banner' className='hero-banner-img' />


    </Box>
  )
}

export default HeroBanner
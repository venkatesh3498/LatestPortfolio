import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Body from './components/Body'
import theme from './../../theme'
function About () {
  return (
    <Box width='100%' py='100px'>
      <Box
        sx={{
          display: 'flex'
        }}
        alignItems='center'
        mb={2}
        data-name='Header'
      >
        <Typography
          variant='h1'
          id='about'
          sx={{
            margin: '8px',
            textDecoration: 'none',
            color: 'text.primary',
            textTransform: 'capitalize',
            transition: 'all 0.5s ease',
            display: 'flex',
            alignItems: 'center',
            fontSize: {
              lg: 'clamp(26px,5vw,32px)',
              md: 'clamp(26px,5vw,32px)',
              sm: '26px',
              xs: '26px'
            }
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontSize: {
                lg: 'clamp(16px,3vw,20px)',
                md: 'clamp(16px,3vw,20px)',
                sm: '16px',
                xs: '16px'
              }
            }}
            mr={{ lg: 1, md: 1, xs: 0, sm: 0 }}
            color={'primary.main'}
          >
            01 .
          </Typography>
          About Me
        </Typography>
        <Divider
          sx={{
            height: '1px',
            width: { xs: '50%', sm: '50%', md: '300px', lg: '300px' },
            borderColor: 'unset',
            bgcolor: 'primary.secondary'
          }}
        />
      </Box>
      <Box>
        <Body />
      </Box>
    </Box>
  )
}

export default About

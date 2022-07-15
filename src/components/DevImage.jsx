import { styled } from '@mui/material'
import React from 'react'
const StyledPic = styled(`div`)(({ theme }) => ({
  position: 'relative',
  width: '300px',
  height: '280px',
  margin: '50px auto 0',
  '@media screen and only (max-width: 600px)': {
    margin: '50px auto 0',
    width: { md: '70%', lg: '70%', xs: '100%', sm: '100%' }
  },
  '& div': {
    display: 'block',
    position: 'relative',
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundColor: theme.palette.primary.main,
    '&:hover, &:focus': {
      background: 'transparent',
      outline: '0',
      '&:after': { top: '10px', left: '10px' },
      '.img': { filter: 'none', mixBlendMode: 'normal' }
    },
    '& img': {
      width: '100%',
      height: '100%',
      position: 'relative',
      borderRadius: '10px',
      mixBlendMode: 'multiply',
      filter: 'grayscale(100%) contrast(1)'
    },
    '&:before, &:after': {
      content: "''",
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      transition: 'all 0.5s ease'
    },
    '&:before': {
      top: '0',
      left: '0',
      backgroundColor: 'inherit',
      mixBlendMode: 'screen'
    },
    '&:after': {
      border: `2px solid ${theme.palette.primary.main}`,
      top: '20px',
      left: '20px',
      zIndex: -1
    }
  }
}))
const DevImage = () => {
  return (
    <StyledPic>
      <div className='wrpper'>
        <img className='img' src='dev.png' />
      </div>
    </StyledPic>
  )
}

export default DevImage

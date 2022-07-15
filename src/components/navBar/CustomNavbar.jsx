import {
  AppBar,
  Slide,
  Toolbar,
  useScrollTrigger,
  IconButton,
  Typography,
  Box,
  Menu,
  Container,
  Tooltip,
  MenuItem,
  Button,
  Grow,
  useTheme,
  useMediaQuery,
  Drawer
} from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { styled } from '@mui/system'
const pages = ['About', 'Experience', 'Work', 'Conatct']
const StyledBox = styled(Box)(({ theme }) => ({
  width: '42px',
  height: '42px',
  '& svg': {
    width: '100%',
    height: '100%',
    fill: 'transparent !important',
    color: theme.palette.primary.main,
    verticalAlign: 'middle',
    transition: 'all 1s ease',
    '& path': {
      transform: 'translate(26px, 30px)',
      fill: 'transparent !important',
      color: `${theme.palette.primary.main} !important`
    },
    '&:hover': {
      transform: 'scale(1.2)',
      transition: 'all 1s ease'
    }
  }
}))

function CustomNavbar () {
  const trigger = useScrollTrigger()
  const [anchorElNav, setAnchorElNav] = useState(false)
  const [state, setState] = useState(false)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const [reveal, setReveal] = useState(true)

  const handleCloseNavMenu = () => {
    setAnchorElNav(false)
  }

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState(open)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      <AppBar
        sx={{
          background: 'inherit',
          boxShadow: 'none'
        }}
        position='static'
      >
        <Container maxWidth='xl'>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingTop: '30px !important',
              paddingLeft: '36px !important'
            }}
          >
            <Grow in={reveal} {...(reveal ? { timeout: 1000 } : {})}>
              <a href='/'>
                <StyledBox>
                  <svg
                    id='logo'
                    xmlns='http://www.w3.org/2000/svg'
                    role='img'
                    viewBox='0 0 100 100'
                  >
                    <g transform='translate(-8.000000, -2.000000)'>
                      <g transform='translate(11.000000, 5.000000)'>
                        <path
                          stroke='currentColor'
                          stroke-width='5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          d='M1 3 L 14 32 L 28 3'
                        ></path>
                        <polygon
                          id='Shape'
                          stroke='currentColor'
                          stroke-width='5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          points='39 0 0 22 0 67 39 90 78 68 78 23'
                        ></polygon>
                      </g>
                    </g>
                  </svg>
                </StyledBox>
              </a>
            </Grow>
            <Box display='flex' ml='auto' mr={5}>
              <Slide
                in={reveal}
                direction='down'
                style={{ transformOrigin: '-10 -10 -10' }}
                {...(reveal ? { timeout: 100 } : {})}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    mr: 1.2
                  }}
                >
                  <Typography
                    component='a'
                    href={`#about`}
                    sx={{
                      margin: '8px',
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                      textTransform: 'capitalize',
                      transition: 'all 0.5s ease',
                      display: 'flex',
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    <Typography mr={1} color={theme.palette.primary.main}>
                      01 .
                    </Typography>
                    About
                  </Typography>
                </Box>
              </Slide>
              <Slide
                in={reveal}
                direction='down'
                style={{ transformOrigin: '-10 -10 -10' }}
                {...(reveal ? { timeout: 400 } : {})}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    mr: 1.2
                  }}
                >
                  <Typography
                    component='a'
                    href={`#about`}
                    sx={{
                      margin: '8px',
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                      textTransform: 'capitalize',
                      transition: 'all 0.5s ease',
                      display: 'flex',
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    <Typography mr={1} color={theme.palette.primary.main}>
                      02.
                    </Typography>
                    Experience
                  </Typography>
                </Box>
              </Slide>
              <Slide
                in={reveal}
                direction='down'
                style={{ transformOrigin: '-10 -10 -10' }}
                {...(reveal ? { timeout: 700 } : {})}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    mr: 1.2
                  }}
                >
                  <Typography
                    component='a'
                    href={`#about`}
                    sx={{
                      margin: '8px',
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                      textTransform: 'capitalize',
                      transition: 'all 0.5s ease',
                      display: 'flex',
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    <Typography mr={1} color={theme.palette.primary.main}>
                      03 .
                    </Typography>
                    Project
                  </Typography>
                </Box>
              </Slide>
              <Slide
                in={reveal}
                direction='down'
                style={{ transformOrigin: '-10 -10 -10' }}
                {...(reveal ? { timeout: 1000 } : {})}
              >
                <Box
                  sx={{
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex' },
                    mr: 1.2
                  }}
                >
                  <Typography
                    component='a'
                    href={`#about`}
                    sx={{
                      margin: '8px',
                      textDecoration: 'none',
                      color: theme.palette.text.primary,
                      textTransform: 'capitalize',
                      transition: 'all 0.5s ease',
                      display: 'flex',
                      '&:hover': {
                        color: theme.palette.primary.main
                      }
                    }}
                  >
                    <Typography mr={1} color={theme.palette.primary.main}>
                      04 .
                    </Typography>
                    Contact
                  </Typography>
                </Box>
              </Slide>
            </Box>
            {matches && (
              <Slide
                in={reveal}
                direction='down'
                style={{ transformOrigin: '-10 -10 -10' }}
                {...(reveal ? { timeout: 1300 } : {})}
              >
                <Button
                  variant='outlined'
                  color='primary'
                  component='a'
                  href='/resume.pdf'
                  rel='noopener noreferrer'
                  sx={{
                    paddingTop: '10px'
                  }}
                >
                  Resume
                </Button>
              </Slide>
            )}
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'flex-end',
                display: { xs: 'flex', md: 'none' }
              }}
            >
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={toggleDrawer(true)}
                color='inherit'
              >
                <MenuIcon sx={{ color: theme.palette.primary.main }} />
              </IconButton>
              <Drawer anchor='right' open={state} onClose={toggleDrawer(false)}>
                <Box
                  sx={{
                    width: '90vw',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%'
                  }}
                >
                  {pages.map((page, index) => (
                    <Box key={page}>
                      <Typography
                      variant='h1'
                        component='a'
                        id='about'
                        href={`#${page}`}
                        sx={{
                          margin: '8px',
                          textDecoration: 'none',
                          color: 'text.primary',
                          textTransform: 'capitalize',
                          transition: 'all 0.5s ease',
                          display: 'flex',
                          mb: 3,
                          mt: 3,
                          alignItems: 'center',
                          fontSize: 'clamp(26px,5vw,32px)'
                        }}
                      >
                        <Typography
                          variant='h2'
                          sx={{
                            fontSize: 'clamp(16px,3vw,20px)'
                          }}
                          mr={1}
                          color={'primary.main'}
                        >
                          0{index + 1} .
                        </Typography>
                        {page}
                      </Typography>
                    </Box>
                  ))}
                  <Slide
                    in={reveal}
                    direction='left'
                    style={{ transformOrigin: '-10 -10 -10' }}
                    {...(reveal ? { timeout: 1300 } : {})}
                  >
                    <Button
                      variant='outlined'
                      color='primary'
                      component='a'
                      href='/resume.pdf'
                      rel='noopener noreferrer'
                      sx={{
                        width: '290px',
                        paddingTop: '10px',
                        fontSize: '30px'
                      }}
                    >
                      Resume
                    </Button>
                  </Slide>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  )
}

export default CustomNavbar

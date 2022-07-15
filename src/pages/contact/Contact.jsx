import { GitHub, LinkedIn, WhatsApp, Instagram } from '@mui/icons-material'
import { styled, Box, Icon, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import theme from './../../theme'
const StyledContactSection = styled('div')(({ theme }) => ({
  maxWidth: '600px',
  margin: '0 auto 100px',
  paddingTop: '100px',
  textAlign: 'center',
  '@media (max-width: 768px)': { margin: '0 auto 50px' },
  '& .overline': {
    display: 'block',
    marginBottom: '20px',
    color: theme.palette.primary.main,
    fontSize: '16px',
    fontWeight: 400,
    '&:before': { bottom: '0', fontSize: '14px' },
    '&:after': { display: 'none' }
  },
  '& .title': { fontSize: 'clamp(40px, 5vw, 60px)', margin: '0%' },
  '& p': { marginBottom: '50px' },
  '& .email-link': {
    color: theme.palette.primary.main,
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    padding: '1.25rem 1.75rem',
    fontSize: '14px',
    lineHeight: 1,
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover, &:focus,&:active': {
      backgroundColor: 'rgba(100,255,218,0.1)',
      outline: 'none'
    },
    '&:after': { display: 'none !important' },
    marginTop: '50px'
  }
}))
const StyledCredit = styled('div')(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '16px',
  margin: 'auto',
  textAlign: 'center',
  lineHeight: 1,
  a: {
    all: 'unset',
    padding: '10px',
    color: theme.palette.text.secondary,
    '& :hover': { color: theme.palette.primary.main }
  },
  '.github-stats': {
    marginTop: '10px',
    '& span': {
      display: 'inline-flex',
      alignItems: 'center',
      margin: '0 7px'
    }
  }
}))
const Contact = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <StyledContactSection id='contact'>
        <h2 className='numbered-heading overline'>What’s Next?</h2>

        <h2 className='title'>Get In Touch</h2>

        <p>
          I’m currently looking for any new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I’ll try my
          best to get back to you!
        </p>

        <a className='email-link' href={`mailto:venkatesh.g3498@gmail.com`}>
          Say Hello
        </a>
      </StyledContactSection>
      {matches && (
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            mb: '30px',
            mt: '10px',
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <Icon
            onClick={() =>
              window.open(
                'https://www.linkedin.com/in/venkatesh-g-03a65b131/',
                '_blank'
              )
            }
            sx={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              transition: 'all 0.7s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-10px)',
                transition: 'all 0.7s ease'
              }
            }}
          >
            <LinkedIn
              sx={{
                width: '30px',
                height: '30px'
              }}
            />
          </Icon>
          <Icon
            onClick={() =>
              window.open('https://github.com/venkatesh3498', '_blank')
            }
            sx={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              transition: 'all 0.7s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-10px)',
                transition: 'all 0.7s ease'
              }
            }}
          >
            <GitHub
              sx={{
                width: '30px',
                height: '30px'
              }}
            />
          </Icon>
          <Icon
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/send/?phone=919553361948&text&app_absent=0',
                '_blank'
              )
            }
            sx={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              transition: 'all 0.7s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-10px)',
                transition: 'all 0.7s ease'
              }
            }}
          >
            <WhatsApp
              sx={{
                width: '30px',
                height: '30px'
              }}
            />
          </Icon>
          <Icon
            onClick={() =>
              window.open('https://www.instagram.com/venkatesh.343/', '_blank')
            }
            sx={{
              width: '30px',
              height: '30px',
              cursor: 'pointer',
              transition: 'all 0.7s ease',
              '&:hover': {
                color: 'primary.main',
                transform: 'translateY(-10px)',
                transition: 'all 0.7s ease'
              }
            }}
          >
            <Instagram
              sx={{
                width: '30px',
                height: '30px'
              }}
            />
          </Icon>
        </Box>
      )}
      <StyledCredit>
        <a href='#'>
          <div>Built by Venkateswararo Garlapati</div>
          <div className='github-stats'>
            <span>
              <span>Built With Love in 💓 GITHUB</span>
            </span>
          </div>
        </a>
      </StyledCredit>
    </>
  )
}

export default Contact

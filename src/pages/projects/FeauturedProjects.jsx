import { ExtensionRounded, RocketLaunch } from '@mui/icons-material'
import { Box, Divider, Icon, styled, Typography } from '@mui/material'
import React from 'react'
import data from './fpdata.json'
import LinkText from '../../components/LinkText'
const StyledProjectsGrid = styled(`ul`)(({ theme }) => ({
  a: {
    position: 'relative',
    zIndex: 1
  }
}))
const StyledProject = styled(`li`)(({ theme }) => ({
  position: 'relative',
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(12, 1fr)',
  alignItems: 'center',
  '@media (max-width: 768px)': {},
  '&:not(:last-of-type)': {
    marginBottom: '100px',
    '@media (max-width: 768px)': { marginBottom: '70px' },
    '@media (max-width: 480px)': { marginBottom: '30px' }
  },
  '&:nth-of-type(odd)': {
    '& .project-content': {
      gridColumn: '7 / -1',
      textAlign: 'right',
      '@media (max-width: 1080px)': { gridColumn: '5 / -1' },
      '@media (max-width: 768px)': {
        gridColumn: '1 / -1',
        padding: '40px 40px 30px',
        textAlign: 'left'
      },
      '@media (max-width: 480px)': { padding: '25px 25px 20px' }
    },
    '& .project-tech-list': {
      justifyContent: 'flex-end',
      '@media (max-width: 768px)': { justifyContent: 'flex-start' },
      li: {
        margin: '0 0 5px 20px',
        '@media (max-width: 768px)': { margin: '0 10px 5px 0' }
      }
    },
    '& .project-links': {
      justifyContent: 'flex-end',
      marginLeft: '0',
      marginRight: '-10px',
      '@media (max-width: 768px)': {
        justifyContent: 'flex-start',
        marginLeft: '-10px',
        marginRight: '0'
      }
    },
    '& .project-image': {
      width: '560.5px',
      height: '361px',
      gridColumn: '1 / 8',
      '@media (max-width: 768px)': { gridColumn: '1 / -1' }
    }
  },
  '& .project-content': {
    position: 'relative',
    gridColumn: '1 / 7',
    gridRow: '1 / -1',
    '@media (max-width: 1080px)': { gridColumn: '1 / 9' },
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      gridColumn: '1 / -1',
      padding: '40px 40px 30px',
      zIndex: 5
    },
    '@media (max-width: 480px)': { padding: '30px 25px 20px' }
  },
  '& .project-overline': {
    margin: '10px 0',
    fontSize: '13px',
    fontWeight: 400
  },
  '& .project-title': {
    color: theme.palette.text.primary,
    fontSize: 'clamp(24px, 5vw, 28px)',
    '@media (min-width: 768px)': { margin: '0 0 20px' },
    '@media (max-width: 768px)': {
      color: 'white',
      '& a': {
        cursor: 'pointer',
        position: 'static',
        '&:before': {
          content: "''",
          display: 'block',
          position: 'absolute',
          zIndex: 0,
          width: '100%',
          height: '100%',
          top: '0',
          left: '0'
        },
        '&:hover': {
          color: 'primary.main'
        }
      }
    }
  },
  '& .project-description': {
    position: 'relative',
    zIndex: 2,
    padding: '15px',
    borderRadius: '4px',
    backgroundColor: '#112240',
    color: theme.palette.text.secondary,
    fontSize: '18px',
    '@media (max-width: 768px)': {
      padding: '20px 0',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      '&:hover': { boxShadow: 'none' }
    }
  },
  '& .project-tech-list': {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    zIndex: 2,
    margin: '25px 0 10px',
    padding: '0',
    listStyle: 'none',
    '& li': {
      margin: '0 20px 5px 0',
      color: theme.palette.text.secondary,
      fontSize: '18px',
      whiteSpace: 'nowrap'
    },
    '@media (max-width: 768px)': {
      margin: '10px 0',
      '& li': { margin: '0 10px 5px 0', color: theme.palette.text.secondary }
    }
  },
  '& .project-links': {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginTop: '10px',
    marginLeft: '-10px',
    color: '#ccd6f6',
    '& a': {
      padding: '10px',
      '&.external': {
        svg: { width: '22px', height: '22px', marginTop: '-4px' }
      },
      svg: { width: '20px', height: '20px' }
    },
    '& .cta': { margin: '10px' }
  },
  '& .project-image': {
    width: '560.5px',
    height: '361px',
    gridColumn: '6 / -1',
    gridRow: '1 / -1',
    position: 'relative',
    background: theme.palette.primary.main,
    transition: 'all 0.5s ease',

    zIndex: 1,
    '@media (max-width: 768px)': {
      gridColumn: '1 / -1',
      height: '100%',
      opacity: 0.25
    },
    '& a': {
      width: '100%',
      height: '100%',
      position: 'relative',
      borderRadius: '4px',
      mixBlendMode: 'multiply'
    },
    display: 'block',
    borderRadius: '4px',
    '&:hover, &:focus': {
      transition: 'all 0.5s ease',
      background: 'transparent',
      '.img': { filter: 'none', mixBlendMode: 'normal' }
    },
    '& img': {
      width: '100%',
      height: '100%',
      position: 'relative',
      borderRadius: '4px',
      mixBlendMode: 'multiply',
      filter: 'grayscale(100%) contrast(1)'
    }
  }
}))
const FeauturedProjects = () => {
  return (
    <Box
      sx={{
        margin: 'auto',
        boxSizing: 'content-box',
        py: '100px'
      }}
    >
      <Box
        sx={{ display: 'flex' }}
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
            fontSize: 'clamp(26px,5vw,32px)'
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontSize: 'clamp(16px,3vw,20px)'
            }}
            mr={{ xs: 0, sm: 0, md: 1, lg: 1 }}
            color={'primary.main'}
          >
            03 .
          </Typography>
          Some Things I’ve Built
        </Typography>
        <Divider
          sx={{
            height: '1px',
            width: { xs: '21%', sm: '21%', md: '300px', lg: '300px' },
            borderColor: 'unset',
            bgcolor: 'primary.secondary'
          }}
        />
      </Box>
      <StyledProjectsGrid>
        {data.map(data => (
          <StyledProject>
            <div className='project-content'>
              <div>
                <Typography
                  color='primary.main'
                  component='p'
                  className='project-overline'
                >
                  Featured Project
                </Typography>

                <h3 className='project-title'>
                  <LinkText href={data.external} text={data.title} />
                </h3>

                <div className='project-description'>
                  <p>{data.description}</p>
                </div>

                {data.tech.length && (
                  <ul className='project-tech-list'>
                    {data.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}

                <div className='project-links'>
                  {data.external && (
                    <Icon
                      sx={{
                        width: '30px',
                        height: '30px',
                        mb: '20px',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          color: 'primary.main',
                          transition: 'all 0.4s ease'
                        }
                      }}
                    >
                      <a
                        style={{ all: 'unset' }}
                        target='_blank'
                        href={data.external}
                      >
                        <RocketLaunch
                          sx={{
                            width: '30px',
                            height: '30px'
                          }}
                        />
                      </a>
                    </Icon>
                  )}
                </div>
              </div>
            </div>

            <div className='project-image'>
              <a target='_blank' href={data.external}>
                <img src={data.imgSrc} alt={'title'} className='img' />
              </a>
            </div>
          </StyledProject>
        ))}
      </StyledProjectsGrid>
    </Box>
  )
}

export default FeauturedProjects

import { ChangeHistory } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import DevImage from '../../../components/DevImage'
import LinkText from '../../../components/LinkText'
import RotatedTriangle from '../../../components/RotatedTriangle'
import theme from './../../../theme'
const Body = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: {
          xs: 'column',
          sm: 'column',
          md: 'row',
          lg: 'row'
        },
        justifyContent: 'space-between'
      }}
    >
      <Box data-name='left' sx={{ width: '100%' }}>
        <Typography
          sx={{
            fontSize: {
              xs: '18px',
              sm: '18px',
              md: '20px',
              lg: '20px'
            },
            marginBottom: '15px'
          }}
          color='text.secondary'
          component='p'
          variant='body1'
        >
          Hello! My name is Venkatesh and I enjoy creating things that live on
          the internet. My interest in web development started back in 2021 when
          I decided to try creating static sites — turns out hacking together a
          static site taught me a lot about HTML & CSS!
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '18px',
              sm: '18px',
              md: '20px',
              lg: '20px'
            },
            marginBottom: '15px',
            width: '95%'
          }}
          color='text.secondary'
          component='p'
          variant='body1'
        >
          Fast-forward to today, and I’ve had the privilege of working at{' '}
          <LinkText href='https://nighatech.com' text=' an start-up' /> and
          <LinkText
            text=' a product based company'
            href='https://sleelsky.com'
          />
          . My main focus these days is building accessible, inclusive products
          and digital experiences for a variety of clients.
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: '18px',
              sm: '18px',
              md: '20px',
              lg: '20px'
            },
            marginBottom: '15px'
          }}
          color='text.secondary'
          component='p'
          variant='body1'
        >
          Here are a few technologies I’ve been working with recently:
        </Typography>
        <Box
          sx={{
            width: {
              xs: '100%',
              sm: '100%',
              md: '305.69px',
              lg: '305.69px'
            },
            height: '80.69px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box>
            <RotatedTriangle text='ReactJS' />
            <RotatedTriangle text='Redux' />
            <RotatedTriangle text='Javascript  (ES6+) ' />
          </Box>
          <Box>
            <RotatedTriangle text='NodeJS' />
            <RotatedTriangle text='ExpressJS' />
            <RotatedTriangle text='MongoDb' />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', sm: '100%' }
        }}
        data-name='right'
      >
        <DevImage />
      </Box>
    </Box>
  )
}

export default Body

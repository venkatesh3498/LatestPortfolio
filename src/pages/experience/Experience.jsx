import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Divider, styled } from '@mui/material'
import RotatedTriangle from '../../components/RotatedTriangle'
import LinkText from '../../components/LinkText'
const StyledTab = styled(props => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'capitalize',
    fontSize: '18px',
    height: '40px',
    width: '100%',
    '&:hover': {
      backgroundColor: '#10203D',
      opacity: 1
    },
    '&.Mui-selected': {
      backgroundColor: '#10203D',
      borderLeft: 1
    },
    '&.Mui-focusVisible': {
      backgroundColor: '#10203D'
    }
  })
)
function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      sx={{
        width: {
          xs: '100%',
          sm: '100%',
          md: '550px',
          lg: '550px'
        }
      }}
    >
      {value === index && (
        <Box
          sx={{
            px: {
              xs: 1,
              sm: 1,
              md: 3,
              lg: 3
            }
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps (index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}
const companies = [
  {
    tabName: 'SleekSky',
    id: 0,
    companyDetails: {
      link: 'https://sleeksky.com',
      jobRole: 'Software Engineer',
      year: 'May-2022 - Present',
      points: [
        'Developed and maintained code for in-house and client websites primarily using ReactJS, CSS, MUI, Styled-Components',
        'Site Performance Optimization,Code Refractoring,Bug Fixes',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness'
      ]
    }
  },
  {
    tabName: 'SleekSky',
    id: 1,
    companyDetails: {
      link: 'https://sleeksky.com',
      jobRole: 'Software Engineer Intern',
      year: 'February - April-2022',
      points: [
        'Developed and maintained code for in-house HeadLess CMS website primarily using ReactJS, CSS, MUI, Redux',
        'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Website',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness'
      ]
    }
  },
  {
    tabName: 'NighaTech',
    id: 2,
    companyDetails: {
      link: 'https://nighatech.com',
      jobRole: 'ReactJs Developer Intern',
      year: 'December-2021 - January-2022',
      points: [
        'Developed and maintained code for E-Commerce website primarily using ReactJS, CSS, MUI, Redux',
        'Api Integration Using Axios',
        'Worked With SoftUserInterface Templates,Redesigned The Templates As We Needed'
      ]
    }
  }
]
const Experience = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        width: {
          xs: '100%',
          sm: '100%',
          md: '700px',
          lg: '700px'
        },
        height: {
          xs: '100%',
          sm: '100%',
          md: '426px',
          lg: '426px'
        },
        margin: 'auto',
        boxSizing: 'content-box',
        py: {
          xs: '20px',
          sm: '20px',
          md: '100px',
          lg: '100px'
        }
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
            mr={1}
            color={'primary.main'}
          >
            02 .
          </Typography>
          Where I’ve Worked
        </Typography>
        <Divider
          sx={{
            height: '1px',
            width: { xs: '29%', sm: '29%', md: '300px', lg: '300px' },
            borderColor: 'unset',
            bgcolor: 'primary.secondary'
          }}
        />
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
          display: 'flex'
        }}
      >
        <Tabs
          orientation='vertical'
          value={value}
          onChange={handleChange}
          variant='standard'
          aria-label='Vertical tabs example'
          sx={{
            width: '135px',
            borderLeft: 2,
            borderColor: 'primary.secondary'
          }}
          TabIndicatorProps={{
            sx: {
              left: 0
            }
          }}
        >
          {companies.map(comp => (
            <StyledTab {...a11yProps(comp.id)} label={comp.tabName} />
          ))}
        </Tabs>
        {companies.map(comp => (
          <TabPanel value={value} index={comp.id}>
            <Typography component='span' fontSize='22px'>
              {comp.companyDetails.jobRole}
              {'   '}
              <LinkText
                href={comp.companyDetails.link}
                text={`@${comp.tabName}`}
              />
            </Typography>
            <Typography color='text.secondary' variant='subtitle1'>
              {comp.companyDetails.year}
            </Typography>
            <Box
              p={1}
              sx={{
                fontSize: '20px',
                '& .css-pvu98g-MuiTypography-root': {
                  fontSize: '18px !important',
                  marginBottom: '10px'
                }
              }}
            >
              {comp.companyDetails.points.map(point => (
                <RotatedTriangle text={point} />
              ))}
            </Box>
          </TabPanel>
        ))}
      </Box>
    </Box>
  )
}

export default Experience

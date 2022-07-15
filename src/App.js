import { Box, Typography } from '@mui/material'
import Loader from './components/loader/Loader'
import CustomNavbar from './components/navBar/CustomNavbar'
import Home from './Layout/Home'

function App () {
  return (
    <Box
      sx={{
        px: {
          sm: '15px',
          xs: '15px',
          md: 0,
          lg: 0
        }
      }}
    >
      <CustomNavbar />
      <Home />
    </Box>
  )
}

export default App

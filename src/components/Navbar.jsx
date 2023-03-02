import React from 'react'
import { Stack } from '@mui/system'
import { Link } from 'react-router-dom'
import { logo } from '../utilis/constants'
import { SearchBar} from "./index"

const Navbar = () => {
  return (
   <Stack
    direction="row"
     alignItems="center"
      p={2} 
      sx={{position: 'sticky',top: 0, background: '#000',justifyContent: 'space-between'}} >
        <Link to="/" style={{ style: 'flex', alignContent: 'center'}}>
            <img src={logo} alt="logo" height={45}/>
        </Link>
        <SearchBar/>
   </Stack>
  )
}

export default Navbar

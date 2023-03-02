import React from 'react'
import { useState, useEffect } from 'react';
import { Box, Stack, Typography} from '@mui/material';
import { SideBar, Videos } from './index';
import { fetchfromApi } from '../utilis/FetchFromAPIS';

const Feed = () => {

    const [selectedCategory,setSelectedCategory] = useState('New')
    const [videos, setVideos] = useState([]);
    useEffect(() => {
     fetchfromApi(`search?part=snippet&q=${selectedCategory}`).then((response) => {
        setVideos(response.items)
     })
    },[selectedCategory])
  return (
    <Stack sx={{ flexDirection:{ sx: 'column',md: 'row'}}}>
        <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d',px: {sx: 0, md: 2}}}>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
            <Typography sx={{color:'#fff'}}>
                Copyright 2022@STS
            </Typography>
        </Box>
        <Box>
            <Typography variant={'h4'} style={{color:'white'}}>
                {selectedCategory} <span style={{color: 'red'}}>videos</span>
            </Typography>
            <Videos videos={videos} style={{mr:'10px'}}/>
        </Box>
    </Stack>
  )
}

export default Feed

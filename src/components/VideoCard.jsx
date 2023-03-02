import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography} from "@mui/material"
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl,demoChannelTitle,demoVideoTitle, demoVideoUrl,demoChannelUrl} from '../utilis/constants';


const VideoCard = ({video}) => {
  return (
    <Card sx={{width: {sx: '100%', md: '450px'}}}>
      <Link to={ video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
        <CardMedia 
           alt={video.snippet.title}
        image={video.snippet.thumbnails.high.url}
        sx={{width:358,height:180}}/>
        <CardContent sx={{backgroundColor: "#1e1e1e", height: '106px'}}>
        <Link to={ video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
          <Typography variant={'h4'} style={{color: '#fff'}}>
              {video.snippet.title.slice(0,50) || demoVideoTitle}
          </Typography>
        </Link>
        <Link to={ video.channelId ? `/channel/${video.channelId}` : demoChannelUrl}>
        <Typography variant={'h4'} style={{color: 'gray'}}>
            {video.snippet.channelTitle.slice(0,50) || demoChannelTitle}
            <CheckCircle sx={{font:'6px',color: 'red'}}/>
        </Typography>
      </Link>
        </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard

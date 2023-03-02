import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Box,CardContent, CardMedia, Typography} from "@mui/material"
import { CheckCircle } from '@mui/icons-material';
import { demoProfilePicture} from '../utilis/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// import ChannelDetail from './ChannelDetail';


const ChannelCard = ({channelDetail}) => {
  return (
    <div>
      <Box
         sx={{
          boxShadow: 'none',
          borderRadius: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '356px', md: '320px' },
          height: '326px',
          margin: 'auto'
        }}>
        <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
          <CardContent style={{ backgroundColor: 'white'}}>
             <CardMedia alt="image" image={channelDetail?.snippet?.thumbnails?.high?.url} sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}></CardMedia>
             <Typography variant="h6">
          {channelDetail?.snippet?.title}{' '}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}
          </CardContent>
          </Link>
      </Box>
      
    </div>
  )
}

export default ChannelCard

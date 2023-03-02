import React from 'react'
import { Stack,Box } from '@mui/system'
import { VideoCard,ChannelCard} from "./index"
const Videos = ({videos}) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item,ids) => {
        return (
        <Box key={ids}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
        )
      })}
    </Stack>
  )
}

export default Videos

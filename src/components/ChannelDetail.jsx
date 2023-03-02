import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  {Box} from "@mui/material"
import { Videos, ChannelCard} from "./index"
import { fetchfromApi } from '../utilis/FetchFromAPIS';

const ChannelDetail = () => {
  const [channelDetail, SetChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const {id} = useParams();
  console.log(id);
   console.log(channelDetail);
  useEffect(() => {
    fetchfromApi(`channels?part=snippet statistics'&id=${id}"`).then((response) => {
      console.log(response)
    })

    fetchfromApi(`search?channelId=${id}&part=snippet`).then((response) => {
      setVideos(response.items)
    })

  },[id])

  return (
    <div>
      
    </div>
  )
}

export default ChannelDetail

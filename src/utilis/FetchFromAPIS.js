import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '5d6e65a69bmshd14d79599dca437p130d96jsn0e0217088267',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchfromApi = async (url) => {
  const {data} = await axios.get(`${BASE_URL}/${url}`,options);
  return data;

}
import axios from 'axios';

const KEY = 'AIzaSyByqVLc0EKVyK40sdWDni_UXKapbvMbhCk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});

import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'YOUR_KEY_HERE';

export default {
  fetchHeaderImage: async () => {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?query=university&client_id=${UNSPLASH_ACCESS_KEY}`
    );
    return response.data.urls.regular;
  }
};
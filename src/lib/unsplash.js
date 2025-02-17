import axios from 'axios';



export default {
  fetchHeaderImage: async () => {
    const response = await axios.get(
      `https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D`
    );
    return response.data.urls.regular;
  }
};
const axios = require('axios');
require('dotenv');




const roomCreator = () => {
  const roomop: option = {
    "topic": 'ask something',
    "type": '2',
    "start_time": new Date(),
    "timezone": 'Asia/Tokyo',
    "settings": {
      "join_before_host": false,
      "mute_upon_entry": true,
      "auto_recording": true,
      "use_pmi": false,
      "host_video": true
    },
  };

  return roomop;
};

const createRoom = async() => {
  const roomop = roomCreator();

  const res = await axios
    .post(
      `https://api.zoom.us/v2/users/${process.env.ZOOM_EMAIL}/meetings`,
      roomop,
      {
        headers: {
          authorization: `Bearer ${process.env.ZOOM_JWT_TOKEN}`
        }
      }
    );

    const hostUrl = res.data.start_url;
    const customerUrl = res.data.join_url;
    return { hostUrl, customerUrl };
    
    
  
};

module.exports = createRoom;
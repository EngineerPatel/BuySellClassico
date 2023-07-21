const cloudinary = require("cloudinary").v2;
cloudinary.config({ 
  cloud_name: 'ddp12re4a', 
  api_key: '185289826933375', 
  api_secret: 'P37_0Iaqfc31im4I8eRWdMJh3Kc' 
});

  module.exports =cloudinary;
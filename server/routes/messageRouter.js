const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Push = require('../models/pushModel');
const pushRouter = express.Router();
const sendNotificationToClient = require('../messaging/notify');


pushRouter.post('/', expressAsyncHandler(async (req, res) => {
    const { name, message } = req.body;
  
    let tokens = req.body.tokens;
    
   tokens = [
            'eEa1Yr4Hknqzjxu3P1G3Ox:APA91bF_DF5aSneGdvxXeyL6BIQy8wd1f600oKE100lzqYq2zROn50wuRe9nB-wWryyJeBmiPVutYogKDV2m36PoEbKK9MOpJPyI-UXqMdYiWLEae8MoEXB4mVz9bXD0IwP7bappnLqg',
            'eUGEdZQ3_ZncB59cnuRuoW:APA91bHTRuLWYS-xhnSdxi1fuUwKc3zCyBGK3Um-Fc85vizUcPDqHgbW9JbBj7hytHlK1Xin-BSavMBs-QfVnjNqckWs_DXOi4haghk0kauGxnaf9obHBn5qjniTZ3csWC5OeiiW2OfP',
          ];

    const pushMessage = new Push({
        name: name,
        message: message,
        tokens: tokens
    });
    // save new message in db
    const createdPushMessage = await pushMessage.save();

    const notificationData = {
      title: name,
      body: message,
    };
    //sendNotificationToClient(tokens, notificationData);
    res.send({
        _id: createdPushMessage._id,
        name: createdPushMessage.name
    });
})
); 

module.exports = pushRouter;
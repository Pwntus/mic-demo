var awsIot = require('aws-iot-device-sdk');
 
var thingName = '00000217';
 
var device = awsIot.device({
   keyPath: './certs/privkey.pem',
  certPath: './certs/cert.pem',
    caPath: './certs/ca.pem',
  clientId: thingName,
      host: 'a31ovqfkmg1ev8.iot.eu-west-1.amazonaws.com'
});

// When the MQTT client connects, subscribe to the thing topic
device.on('connect', function() {
  console.log('Client connected');
  device.subscribe('$aws/things/' + thingName + '/shadow/update');
});
 
device.on('message', function(topic, message) {
  console.log('Message: ', topic, message.toString());
});

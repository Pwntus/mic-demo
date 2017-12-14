# MIC Example Code in Node.js
This repository contains some examples written in Node.js. An external [mic-sdk-js](https://www.npmjs.com/package/mic-sdk-js) module is used to simplify the invokation of API functions.

You can find the MIC Cloud API documentation here: <https://docs.telenorconnexion.com/mic/cloud-api/>

## Example: Elasticsearch
[examples/elasticsearch.js](examples/elasticsearch.js)

Authenticates with Cognito and invokes the ObservationLambda FIND action with an Elasticsearch query to extract historical data of resources.

## Example: MQTT Client using Certificate Files
[examples/mqtt_certificates.js](examples/mqtt_certificates.js)

Creates a MQTT client that is authenticated using certificate files. May only be used for listening to the Thing owning the certificates.

## Example: MQTT Client using Cognito tokens
[examples/mqtt_certificates.js](examples/mqtt_certificates.js)

Creates a MQTT client that is authenticated with Cognito. May listen for all Things that the authenticated Cognito user has access to.

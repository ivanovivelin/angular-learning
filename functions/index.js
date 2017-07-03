const functions = require('firebase-functions');
// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
const bunyan = require('bunyan');

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
/*
const nodeMailjet = require("node-mailjet").connect('8e16db3f9508486e626b3c05ca121f7b', '1afb5c922280e5fb2fd6e9c91fb35846');

function handleError (err) {
    console.error(err);
    throw new Error(err.ErrorMessage);
}
 
function newContact (email) {
  nodeMailjet.post('contact')
      .request({Email: email})
      .catch(handleError);
}
 
function testEmail (text) {
  email = {};
  email['FromName'] = 'Your Name';
  email['FromEmail'] = 'ivelin.ivanovxps@gmail.com';
  email['Subject'] = 'Test Email';
  email['Recipients'] = [{Email: 'kolekkid@wp.pl'}];
  email['Text-Part'] = text;
 
  nodeMailjet.post('send')
    .request(email).then(function (result) {
    // do something with the result
    // result structure is {response: {...}, body: {...}}
    console.log(response);
    })
    .catch(handleError);
}
 */

exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  admin.database().ref('/messages').push({original: original}).then(snapshot => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref);
  });
});

exports.sendMails = functions.https.onRequest((req, res) => {
    // testEmail('TEST');

    const mailOptions = {
    to: 'test@example.com',
    subject: `Information Request from ${val.name}`,
    html: val.html
  };
});
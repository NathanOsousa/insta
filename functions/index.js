//TODO: rodar comando 'firebase deploy --project insta-71514',  cadastrar cartão de credito pra usar o firebase funcions pra funcionar
const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const fs = require('fs');
const uuid = require('uuid-v4');
const {Storage} = require('@google-cloud/storage');
const storage = new Storage({
  projectId: 'insta-71514',
  keyFilename: 'insta-71514.json',
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', {structuredData: true});
  response.send('Hello from Firebase!');
});

exports.uploadImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    try {
      fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image, 'base64');
      const bucket = storage.bucket('insta-71514.appspot.com');
      // const bucket = storage.bucket('insta-71514.appspot.com/');
      const id = uuid();
      bucket.upload(
        '/tmp/imageToSave.jpg',
        {
          uploadType: 'media',
          destination: `/posts/${id}.jpg`,
          metadata: {
            metadata: {
              contentType: 'image/jpeg',
              firebaseStorageDownloadTokens: id,
            },
          },
        },
        (err, file) => {
          if (err) {
            console.log('🚀 ~ file: index.js ~ line 36 ~ cors ~ err', err);
            return response.status(500).json({error: err});
          } else {
            const fileName = encodeURIComponent(file.name);
            const imageUrl =
              'https://firebasestorage.googleapis.com/v0/b/' +
              bucket.name +
              '/o/' +
              fileName +
              '?alt=media&token=' +
              id;
            return response.status(200).json({imageUrl: imageUrl});
          }
        },
      );
    } catch (err) {
      console.log('🚀 ~ file: index.js ~ line 24 ~ cors ~ err', err);
      return response.status(500).json({error: err});
    }
  });
});

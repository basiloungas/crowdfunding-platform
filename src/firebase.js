import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAQrf2EYrcifKxcmxrnYDCTO2xl5jMufOE",
  authDomain: "contribution-page.firebaseapp.com",
  databaseURL: "https://contribution-page.firebaseio.com",
  projectId: "contribution-page",
  storageBucket: "",
  messagingSenderId: "409522098367"
};

firebase.initializeApp(config);

window.firebase = firebase;

export default firebase;

export const setData = (ref, data) => firebase
  .database()
  .ref(ref)
  .set(data);

export const getData = (ref) => firebase
  .database()
  .ref(ref)
  .once('value')
  .then(snapshot => snapshot.val());

export const getAllData = () => getData('/');

export const pushData = (ref, data) => firebase
  .database()
  .ref(ref)
  .push(data)
  .then(({key}) => key);

export const getOrCreateEntry = (ref, keyName, keyValue, data) => firebase
  .database()
  .ref(ref)
  .once('value')
  .then(function(snapshot) {
    let key;

    snapshot.forEach(function(entry) {
      const entryData = entry.val();

      if (entryData[keyName] === keyValue) {
        key = entry.key;
      }
    });

    if (key) {
      return key;
    }

    return pushData(ref, data);
  });

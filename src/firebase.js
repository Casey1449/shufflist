import firebase from 'firebase'

const ApiKey = process.env.API_KEY

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: ApiKey,
  authDomain: "shufflist.firebaseapp.com",
	databaseURL: "https://shufflist.firebaseio.com",
	projectId: "shufflist",
	storageBucket: "shufflist.appspot.com",
	messagingSenderId: "477154898678"
};
const fire = firebase.initializeApp(config);
export default fire;

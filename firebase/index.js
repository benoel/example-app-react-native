import * as firebase from 'firebase';
const config = {
	apiKey: "AIzaSyBSWhZgboxnhex6Jc3RGi4BIeVr-5Ek2Tk",
	authDomain: "clues-5adbf.firebaseapp.com",
	databaseURL: "https://clues-5adbf.firebaseio.com",
	projectId: "clues-5adbf",
	storageBucket: "clues-5adbf.appspot.com",
	messagingSenderId: "1092361893143"
};
export default firebaseApp = firebase.initializeApp(config);
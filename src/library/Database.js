import Firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'

const firebaseConfig = {

};

let App = Firebase.initializeApp(firebaseConfig)
let Firestore = App.firestore()
Firestore.settings({ timestampsinSnapshots: true })

export let FirebaseApp = App
export default {}

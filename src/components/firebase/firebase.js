import app from "firebase/app"
import "firebase/auth"
import "firebase/database";
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENI_ID
}
class Firebase {
    constructor() {
        app.initializeApp(config);
        app.analytics();
        this.auth = app.auth()
        this.dataBase = app.database();
    }
    getUserConnected() {
       return this.auth.currentUser;
    }
    ConnectUserWithEmail(email,password) {
       return this.auth.signInWithEmailAndPassword(email,password);
    }
    async addMessage(contact) {
        const ref = this.dataBase.ref("/contact");
        await ref.push(contact);
    }
    async getMessage() {
        const ref = this.dataBase.ref("/contact");
        const snapshot = await ref.once("value");
        return new Promise((resolve,reject) => {
            let messages = [];
            snapshot.forEach(mess => {
                messages.push({name : mess.val().name,email : mess.val().email,phone : mess.val().phone,message: mess.val().message});
            })
            resolve(messages);
        })
    }
    doSignOut = async () => {
       await this.auth.signOut();
    } 
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}
export default Firebase;

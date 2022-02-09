import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzcqS_elTzNZSY7OKyu1_d5YEFU2a0Pcg",
  authDomain: "music-aeb3c.firebaseapp.com",
  projectId: "music-aeb3c",
  storageBucket: "music-aeb3c.appspot.com",
  appId: "1:215226179306:web:e0825528adc4e6e41b8193",
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth(); // firebase 用戶系統
const db = firebase.firestore(); // firebase 資料庫
const storage = firebase.storage(); // firebase 的儲存功能

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistence error ${error.code}`);
});

// firebase 匯出資料庫中使用者的集合
// 若沒有此集合，firebase 會自動創造使用者的集合
const userCollection = db.collection("users");
const songsCollection = db.collection("songs");
const commentsCollection = db.collection("comments");

// 匯出要使用的功能
// eslint-disable-next-line object-curly-newline
export {
  auth,
  db,
  userCollection,
  songsCollection,
  commentsCollection,
  storage,
};

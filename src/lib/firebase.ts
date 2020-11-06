import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

// import from other
import Constants from "expo-constants";
import { Post } from "../types/post";

// types

// Initialize Firebase
// appsな！
if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

export const getPosts = async () => {
  try {
    const snapshot = await firebase.firestore().collection("posts").get();
    const posts = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id } as Post;
    });
    return posts;
  } catch (error) {
    console.log(error);
    return [];
  }
};

import { Post } from "./post";

export type RootStackParamList = {
  // MovieStack
  HOME: undefined;
  Movie: { post: Post };
  // AccountStack
  Account: undefined;
  Text: undefined;
  // Tab
  CreateScreen: undefined;
  AccountTab: undefined;
  MovieTab: undefined;
};

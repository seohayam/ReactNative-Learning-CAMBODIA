import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";

// types
import { Post } from "../types/post";

// firebase
import { getPosts } from "../lib/firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { PostItems } from "../components/PostsItems";

// type
// この二つをセットで同時に作らなければ作動しない
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "HOME">;
};

export const MovieScreen: React.FC<Props> = ({ navigation }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fethcPosts();
  }, []);

  const fethcPosts = async () => {
    const posts = await getPosts();
    setPosts(posts);
  };

  const postOnPressed = (post: Post) => {
    navigation.navigate("Movie", { post });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        renderItem={({ item }: { item: Post }) => (
          <PostItems post={item} onPress={() => postOnPressed(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

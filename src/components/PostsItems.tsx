import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Post } from "../types/post";

type Props = {
  post: Post;
  onPress: () => void;
};

export const PostItems: React.FC<Props> = ({ post, onPress }: Props) => {
  return (
    //   onPressされると、親から渡って来た{onPress}が実行される
    <TouchableOpacity onPress={onPress}>
      <Text>{post.name}</Text>
      <Text>{post.category}</Text>
      <Image source={{ uri: post.url }} style={{ width: 100, height: 100 }} />
    </TouchableOpacity>
  );
};

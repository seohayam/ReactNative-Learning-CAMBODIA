import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// type
// この二つをセットで同時に作らなければ作動しない
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { Route, RouteProp } from "@react-navigation/native";
import { round } from "react-native-reanimated";

// React.FC = これは、return や render をする時に使うと良いとされている
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Movie">;
  //   プロップスを受け取るのに必要
  rotute: RouteProp<RootStackParamList, "Movie">;
};

// React.FC = これは、return や render をする時に使うと良いとされている

export const ShowScreen: React.FC<Props> = ({ navigation, rotute }: Props) => {
  const { post } = rotute.params;
  console.log(post);

  // useEffect(() => {
  //   navigation.setOptions({ title: post.name });
  // }, [post]);

  return (
    <View>
      <Text>これは、MOVIE SHOW SCREEN です。</Text>
    </View>
  );
};

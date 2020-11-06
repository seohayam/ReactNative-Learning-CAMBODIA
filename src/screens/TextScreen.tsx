import React from "react";
import { View, Text } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";

// type
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Text">;
  route: RouteProp<RootStackParamList, "Text">;
};

export const TextScreen: React.FC<Props> = ({ navigation }: Props) => {
  return (
    <View>
      <Text>TextScreen</Text>
    </View>
  );
};

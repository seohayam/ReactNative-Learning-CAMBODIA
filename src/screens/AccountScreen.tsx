import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { block } from "react-native-reanimated";

// type
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Account">;
};

export const AccountScreen: React.FC<Props> = ({ navigation }: Props) => {
  const onPressTextScreen = () => {
    navigation.navigate("Text");
  };
  return (
    <View>
      <Text>これは、AccountScreenです。</Text>
      <TouchableOpacity
        onPress={onPressTextScreen}
        style={{ borderWidth: 2, width: 200, margin: 100 }}
      >
        <Text>TextScreenへ移動</Text>
      </TouchableOpacity>
    </View>
  );
};

import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

// TabBottumNavigatotr
import { MainTabNavigatotr } from "./MainTabNavigator";
import { AccountStackNavigator } from "./AccountStackNavigator";
import { MoviesStackNavigator } from "./MovieStackNavigator";

// screan

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <AccountStackNavigator /> */}
      <MoviesStackNavigator />
      {/* <MainTabNavigatotr /> */}
    </NavigationContainer>
  );
};

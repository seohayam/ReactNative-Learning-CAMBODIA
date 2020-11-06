import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import { MovieScreen } from "../screens/MovieScreen";
import { ShowScreen } from "../screens/ShowScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export const MoviesStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HOME">
      <Stack.Screen name="HOME" component={MovieScreen} />
      <Stack.Screen name="Movie" component={ShowScreen} />
    </Stack.Navigator>
  );
};

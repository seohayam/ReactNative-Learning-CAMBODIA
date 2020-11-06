import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../screens/AccountScreen";
import { TextScreen } from "../screens/TextScreen";
import { RootStackParamList } from "../types/navigation";

// Screen

const Stack = createStackNavigator<RootStackParamList>();

export const AccountStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Text" component={TextScreen} />
    </Stack.Navigator>
  );
};

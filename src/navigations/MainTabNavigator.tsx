import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CreatScreen } from "../screens/CreateScreen";

// StackNavigator
import { AccountStackNavigator } from "../navigations/AccountStackNavigator";
import { MoviesStackNavigator } from "./MovieStackNavigator";
import { RootStackParamList } from "../types/navigation";

const Tab = createBottomTabNavigator<RootStackParamList>();

export const MainTabNavigatotr = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="AccountTab" component={AccountStackNavigator} />
      <Tab.Screen name="MovieTab" component={MoviesStackNavigator} />
      <Tab.Screen name="CreateScreen" component={CreatScreen} />
    </Tab.Navigator>
  );
};

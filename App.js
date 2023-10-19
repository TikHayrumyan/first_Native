import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./app/screen/Home/Home";
import Auth from "./app/screen/Auth/Auth";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={Auth} />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
        {/* <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

// App.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Credit from "./src/screens/Credit";
import Rules from "./src/screens/Rules";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{Title: "Home", headerStyle: { backgroundColor: '#1c252e'}, headerTintColor: 'white',}} />
        <Stack.Screen name="Rules" component={Rules} options={{Title: "Rules", headerStyle: {backgroundColor: '#1c252e'}, headerTintColor: 'white',}} />
        <Stack.Screen name="Credit" component={Credit} options={{Title: "Credit", headerStyle: {backgroundColor: '#1c252e'}, headerTintColor: 'white',}} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

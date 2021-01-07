import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import {
  HomeScreen,
  NotificationsScreen,
  ProfileScreen,
  WelcomeScreen,
} from "../Screens";

const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Welcome"
        drawerPosition="left"
        drawerType="back"
        drawerStyle={{
          backgroundColor: "#fff",
          width: 240,
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;

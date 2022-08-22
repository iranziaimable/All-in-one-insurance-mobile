import React from "react"
import Ionicons from "react-native-vector-icons/Ionicons"

//react naviagtion
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

// screens
import Login from "./../screens/registrations/Login"
import Signup from "./../screens/registrations/Signup"
import HomeScreen from "./../screens/HomeScreen"
import Dashboard from "../screens/Dashboard"
import DefineInsurance from "../screens/DefineInsurance"
import ProfileScreen from "../screens/ProfileScreen"
import InsuranceScreen from "../screens/InsuranceScreen"

const Tab = createStackNavigator()
const Stack = createBottomTabNavigator()

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...tabBarStyle.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: "#bda133",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 2,
            left: 15,
            right: 15,
            backgroundColor: "#F1F1F1",
            borderRadius: 15,
            height: 70,
            ...tabBarStyle.shadow,
          },
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="home" size={25} color={"#bda133"} />
                <Text style={{ color: focused ? "#aaab5c" : "#748c94", fontSize: 12 }}>Home</Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="logo-buffer" size={25} color={"#bda133"} />
                <Text style={{ color: focused ? "#aaab5c" : "#748c94", fontSize: 10 }}>DashBoard</Text>
              </View>
            ),
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          }}
        />

        <Stack.Screen
          name="DefineInsurance"
          component={DefineInsurance}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons
                  name="add"
                  size={30}
                  color={"#adb3a8"}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
            ),
            tabBarButton: (props) => <CustomTabBarButton {...props} />,
          }}
        />

        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="person-add" size={25} color={"#bda133"} />
                <Text style={{ color: focused ? "#aaab5c" : "#748c94", fontSize: 12 }}>Profile</Text>
              </View>
            ),
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          }}
        />
        <Stack.Screen
          name="InsuranceScreen"
          component={InsuranceScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="medkit" size={25} color={"#bda133"} />
                <Text style={{ color: focused ? "#aaab5c" : "#748c94", fontSize: 12 }}>Insurance</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const tabBarStyle = StyleSheet.create({
  shadow: {
    shadowColor: "#2e6157",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
})

export default RootStack

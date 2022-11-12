import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/Auth/SplashScreen';
import LoginScreen from './src/Auth/LoginScreen';
import OTPVerify from './src/Auth/OtpVerifyScreen';
import HomeScreen from './src/Home/HomeScreen';
import Registration from './src/Auth/SignupScreen';
import SubscribedBook from './src/Home/SubscribedBook';

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="splashscreen">
      <Stack.Screen name="splashscreen" component={SplashScreen} />
      <Stack.Screen name="loginscreen" component={LoginScreen} />
      <Stack.Screen name="OTPVerify" component={OTPVerify} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
};

const Home = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="homescreen">
      <Stack.Screen name="homescreen" component={HomeScreen} />
      <Stack.Screen name="SubscribedBook" component={SubscribedBook} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

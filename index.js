/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import LoginScreen from './src/Auth/LoginScreen';
import OTPVerify from './src/Auth/OtpVerifyScreen';

AppRegistry.registerComponent(appName, () => OTPVerify);

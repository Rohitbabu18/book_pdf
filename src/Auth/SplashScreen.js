import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React from 'react';
import CustomImage from '../Utils/Images';
import Fonts from '../Utils/Fonts';
import Colors from '../Utils/Colors';
import { horizScale } from '../Utils/LayoutUtil';

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={CustomImage.book} style={styles.splashicon} />
      </View>
      <View
        style={{
          flex: 0.2,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={styles.textBold}>Read your Favourite books</Text>
        <Text style={styles.textNormal}>
          All your favourite book in one place, read{'\n'} any book staying at
          home, on travelling, or {'\n'} anywhere else
        </Text>
      </View>
      <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.replace('loginscreen');
          }}>
          <Image source={CustomImage.forword} style={styles.forword} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  btnText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: Fonts.weight.w6,
  },
  btn: {
    backgroundColor: Colors.button,
    width: '30%',
    alignSelf: 'center',
    paddingHorizontal: horizScale(30),
    paddingVertical: horizScale(13),
    borderRadius: horizScale(7),
  },
  textNormal: {
    fontSize: Fonts.size.medium,
    color: Colors.gray,
    textAlign: 'center',
  },
  textBold: {
    fontSize: Fonts.size.h5,
    fontWeight: Fonts.weight.bold,
    color: Colors.black,
    textAlign: 'center',
  },
  splashicon: {
    alignSelf: 'center',
    height: horizScale(350),
    width: '80%',

  },
  forword: {
    height: horizScale(20),
    width: horizScale(20),
    tintColor: Colors.white,
    alignSelf: 'center',
  },
});

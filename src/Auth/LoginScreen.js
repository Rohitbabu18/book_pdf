import React, { useState } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Colors from '../Utils/Colors';
import CustomImage from '../Utils/Images';
import Fonts from '../Utils/Fonts';
import {
  horizScale,
  vertScale,
  Text,
  MediumText,
  BoldText,
  Spacer,
} from '../Utils/LayoutUtil';
import GloableStyle from '../Utils/components/GloableStyle';
import FocusStatusBar from '../Utils/components/StatusBar';

export default function LoginScreen(props) {
  const [state, setstate] = useState({
    number: '',
  });
  return (
    <SafeAreaView style={GloableStyle.container}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor={Colors.statusBar}
      />
      {/* <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
        style={GloableStyle.backView}>
        <Image source={CustomImage.back} />
        <Text style={GloableStyle.backText}>Back</Text>
      </TouchableOpacity> */}
      <Spacer height={10} />
      <MediumText style={GloableStyle.headerText1}>
        Enter Your Number for
      </MediumText>
      <BoldText style={GloableStyle.headerText2}>Mobile Verification</BoldText>
      <Spacer height={30} />
      <Image style={styles.img1} source={CustomImage.mobile}></Image>
      <Spacer height={30} />
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.img2} source={CustomImage.smartphone}></Image>
        <View style={{ width: '85%' }}>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                marginLeft: horizScale(25),
                fontSize: Fonts.size.regular,
                color: Colors.black,
              }}>
              +91{' '}
            </Text>
            <TextInput
              style={{
                marginLeft: horizScale(5),
                fontSize: Fonts.size.regular,
                color: Colors.black,
              }}
              placeholder={'Mobile Number'}
              maxLength={10}
              onChangeText={value => {
                setstate({ ...state, number: value });
              }}
              keyboardType={'number-pad'}
            />
          </View>
          <View
            style={{
              ...GloableStyle.horizline,
              backgroundColor: state.number ? Colors.button : Colors.gray,
            }}
          />
        </View>
      </View>
      <Spacer height={100} />
      <TouchableOpacity
        style={GloableStyle.button}
        onPress={() => {
          props.navigation.navigate('OTPVerify');
        }}>
        <Text style={GloableStyle.buttonText}>Send</Text>
      </TouchableOpacity>
      <View style={styles.signupView}>
        <Text style={styles.text}>Not a member ? </Text>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Registration');
          }}>
          <Text style={[styles.text, { color: Colors.button }]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  signupView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: horizScale(30)
  },
  text: {
    fontSize: Fonts.size.small,
    color: Colors.gray,

  },
  img1: {
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
    height: vertScale(200),
    width: horizScale(150),
  },
  img2: {
    marginLeft: horizScale(20),
    marginTop: vertScale(5),
    height: vertScale(50),
    width: horizScale(40),
    resizeMode: 'contain',
  },
});

import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Colors from '../Utils/Colors';
import OTPTextInput from 'react-native-otp-textinput';
import CustomImage from '../Utils/Images';
import Fonts from '../Utils/Fonts';
import {
  horizScale,
  vertScale,
  Text,
  MediumText,
  BoldText,
  BlackText,
  Spacer,
} from '../Utils/LayoutUtil';
import GloableStyle from '../Utils/components/GloableStyle';
import FocusStatusBar from '../Utils/components/StatusBar';
export default function OTPVerify(props) {
  const [state, setstate] = useState({
    displayPinCode: true,
    success: '',
    inputCode: '',
    number: '89xxxxxx23',
  });
  return (
    <ScrollView style={GloableStyle.container}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor={Colors.statusBar}
      />
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
        style={GloableStyle.backView}>
        <Image source={CustomImage.back} />
        <Text style={GloableStyle.backText}>Back</Text>
      </TouchableOpacity>
      <MediumText style={GloableStyle.headerText1}>
        Check Your Mobile and
      </MediumText>
      <BoldText style={GloableStyle.headerText2}>Enter OTP Number</BoldText>

      <Text style={styles.text}>
        We've send an OTP to {state.number} mobile number. Please check your
        message box and enter number
      </Text>
      <Image source={CustomImage.otp} style={styles.Image} />
      <Spacer height={30} />
      <OTPTextInput
        keyboardType={'ascii-capable'}
        inputCount={6}
        handleTextChange={value => {
          setstate({...state, inputCode: value});
        }}
        textInputStyle={{width: '10%'}}
        // containerStyle={{ width: '90%' }}
        containerStyle={styles.pincode}
        offTintColor={Colors.gray}
        tintColor={Colors.button}
      />
      {/* <SmoothPinCodeInput
                password musk={'*'}
                codeLength={4}
                cellSpacing={horizScale(15)}
                cellSize={horizScale(50)}
                cellStyle={{
                    borderBottomWidth: horizScale(2),
                    borderColor: Colors.gray,

                }}

                containerStyle={styles.pincode}
                autoFocus={true}
                cellStyleFocused={{
                    borderColor: Colors.green,
                }}
                value={state.inputCode}
                onTextChange={password => setstate({ ...state, inputCode: password })}
            /> */}
      <Spacer height={20} />
      <TouchableOpacity
        style={{alignSelf: 'flex-end'}}
        onPress={() => {
          alert('coming soon');
        }}>
        <Text style={styles.text3}>Resend OTP </Text>
      </TouchableOpacity>
      <Spacer height={40} />
      <TouchableOpacity
        style={GloableStyle.button}
        onPress={() => {
          props.navigation.replace('Home');
        }}>
        <Text style={GloableStyle.buttonText}>Verify</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pincode: {
    alignSelf: 'center',
  },
  Image: {
    height: vertScale(200),
    width: horizScale(150),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontSize: Fonts.size.medium,
    color: Colors.gray,
    marginLeft: horizScale(20),
    width: horizScale(380),
  },
  text3: {
    color: Colors.button,
    marginRight: horizScale(20),
    fontSize: Fonts.size.regular,
  },
});

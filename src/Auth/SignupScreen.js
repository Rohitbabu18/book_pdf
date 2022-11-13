import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    SafeAreaView,
    TextInput,
    Pressable,
    ToastAndroid
} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import Colors from '../Utils/Colors';
import CustomImage from '../Utils/Images';
import Fonts from '../Utils/Fonts';

import { horizScale, vertScale, Text, MediumText, BoldText, Spacer } from '../Utils/LayoutUtil';
import GloableStyle from '../Utils/components/GloableStyle';
import FocusStatusBar from '../Utils/components/StatusBar';
export default function Registration(props) {
    const [state, setstate] = useState({
        name: '',
        email: '',
        number: '',
        checked: false,
    })
    return (
        <>
            <SafeAreaView style={GloableStyle.container}>
                <FocusStatusBar barStyle="dark-content" backgroundColor={Colors.statusBar} />
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack();
                    }}
                    style={GloableStyle.backView}>
                    <Image source={CustomImage.back} />
                    <Text style={GloableStyle.backText}>Back</Text>
                </TouchableOpacity>
                <MediumText style={GloableStyle.headerText1}>Enter Your Details For</MediumText>
                <BoldText style={GloableStyle.headerText2}>Sign In</BoldText>
                <KeyboardAvoidingView
                    enabled
                    behavior="padding"
                    style={{ flexGrow: 0.2, marginTop: vertScale(20) }}>
                    <FloatingLabelInput
                        value={state.name}
                        label={'Name'}
                        //ref={ref1}
                        maxLength={20}
                        // onSubmitEditing={() => { ref2.current.focus(), setState({ ...state, hasError: '' }) }}
                        onChangeText={para => setstate({ ...state, name: para })}
                        customLabelStyles={styles.customlabelstyle}
                        labelStyles={styles.labelstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: state.name ? Colors.green : Colors.gray,
                        }}
                        inputStyles={styles.floatinginputstyle}
                    />
                    <FloatingLabelInput
                        value={state.email}
                        label={'Email'}
                        //ref={ref1}
                        maxLength={20}
                        // onSubmitEditing={() => { ref2.current.focus(), setState({ ...state, hasError: '' }) }}
                        onChangeText={para => setState({ ...state, name: para })}
                        customLabelStyles={styles.customlabelstyle}
                        labelStyles={styles.labelstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: state.name ? Colors.green : Colors.gray,
                        }}
                        inputStyles={styles.floatinginputstyle}
                    />
                    <View style={{ flexDirection: 'row', marginVertical: horizScale(20) }}>
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
                                    height: vertScale(2),
                                    backgroundColor: state.number ? Colors.button : Colors.gray,
                                }}
                            />
                        </View>
                    </View>
                    {/* <FloatingLabelInput
                        value={state.password}
                        label={'Password'}
                        //ref={ref1}
                        maxLength={20}
                        // secureTextEntry={true}
                        isPassword={true}
                        showPasswordImageStyles={{ tintColor: Colors.gray }}
                        // onSubmitEditing={() => { ref2.current.focus(), setState({ ...state, hasError: '' }) }}
                        onChangeText={para => setState({ ...state, password: para })}
                        customLabelStyles={styles.customlabelstyle}
                        labelStyles={styles.labelstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: state.name ? Colors.green : Colors.gray,
                        }}
                        inputStyles={styles.floatinginputstyle}
                    />
                    <FloatingLabelInput
                        value={state.conformpassword}
                        label={'Conform Password'}
                        //ref={ref1}
                        maxLength={20}
                        // secureTextEntry={true}
                        isPassword={true}
                        showPasswordImageStyles={{ tintColor: Colors.gray }}
                        // onSubmitEditing={() => { ref2.current.focus(), setState({ ...state, hasError: '' }) }}
                        onChangeText={para => setState({ ...state, password: para })}
                        customLabelStyles={styles.customlabelstyle}
                        labelStyles={styles.labelstyle}
                        containerStyles={{
                            ...styles.floatingcontainerstyle,
                            borderBottomColor: state.name ? Colors.green : Colors.gray,
                        }}
                        inputStyles={styles.floatinginputstyle}
                    /> */}
                </KeyboardAvoidingView>
                <Spacer height={20} />
                <View style={styles.tc}>
                    <TouchableOpacity
                        style={[styles.checkbox, {
                            backgroundColor: state.checked === true ? Colors.button : Colors.white
                        }]}
                        onPress={() => {
                            setstate({
                                ...state, checked: !state.checked,
                            });
                        }}>
                        {state.checked === true ? (
                            <Image
                                style={{
                                    height: horizScale(18),
                                    width: horizScale(18),
                                    tintColor: Colors.white,
                                    backgroundColor: Colors.button
                                }}
                                source={CustomImage.checked}
                            />
                        ) :
                            null
                        }
                    </TouchableOpacity>
                    <MediumText style={styles.text4}> I agree with all </MediumText>
                    <Pressable
                        onPress={() => {
                            alert('Coming Soon');
                        }}>
                        <MediumText
                            style={styles.text5}
                        >
                            Terms
                        </MediumText>
                    </Pressable>
                    <MediumText style={styles.text4}> and </MediumText>
                    <Pressable
                        onPress={() => {
                            alert('Coming Soon');
                        }}>
                        <MediumText
                            style={styles.text5}
                        >
                            Conditions
                        </MediumText>
                    </Pressable>
                    <MediumText style={styles.text4}>.</MediumText>
                </View>
                <Spacer height={90} />
                <TouchableOpacity style={GloableStyle.button}
                    onPress={() => {
                        if (state.checked) {

                            props.navigation.navigate('OTPVerify');
                        }
                        else {
                            ToastAndroid.showWithGravity('Accept Terms & Condition To Continue', ToastAndroid.SHORT, ToastAndroid.BOTTOM)
                        }
                    }}>
                    <Text style={GloableStyle.buttonText}>Verify OTP</Text>
                </TouchableOpacity>
                <Spacer height={15} />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <MediumText style={styles.text4}>Already a user? </MediumText>
                    <TouchableOpacity onPress={() => {
                        props.navigation.navigate('loginscreen');
                    }}>
                        <MediumText style={styles.text5}>Login</MediumText>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    img2: {
        marginLeft: horizScale(20),
        marginTop: vertScale(5),
        height: vertScale(50),
        width: horizScale(40),
        resizeMode: 'contain',
    },
    tc: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    customlabelstyle: {
        fontSizeFocused: Fonts.size.small,
        fontSizeBlurred: Fonts.size.medium,
        colorBlurred: Colors.gray,
        colorFocused: Colors.gray,
    },
    flatlistfooterBorder: {
        borderWidth: horizScale(3),
        borderColor: Colors.green,
        margin: horizScale(5),
        borderRadius: horizScale(20)
    },
    floatinginputstyle: {
        color: Colors.black,
        fontSize: Fonts.size.medium,
        marginTop: vertScale(5),

    },
    floatingcontainerstyle: {
        marginTop: vertScale(15),
        marginHorizontal: horizScale(20),
        borderBottomWidth: vertScale(2),

    },
    labelstyle: {
        paddingBottom: horizScale(10),
        color: Colors.black,
        fontFamily: 'Noto-Regular',
    },
    text4: {
        // fontWeight: 'bold',
        color: Colors.black,
        fontSize: Fonts.size.medium,
    },
    text5: {
        //  fontWeight: 'bold',
        color: Colors.button,
        fontSize: Fonts.size.medium,
    },
    checkbox: {
        height: horizScale(25), // changes the hitspace but not the checkbox itself
        width: horizScale(25),
        borderWidth: horizScale(2),
        borderColor: Colors.button,
        borderRadius: horizScale(5),
        marginLeft: horizScale(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
});

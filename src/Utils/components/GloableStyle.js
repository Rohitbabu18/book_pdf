import { StyleSheet } from 'react-native'
import Colors from '../Colors';
import Fonts from '../Fonts';
import { horizScale, vertScale } from '../LayoutUtil';
const GloableStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.appBack,
    },
    button: {
        paddingVertical: vertScale(15),
        width: '80%',
        backgroundColor: Colors.button,
        borderRadius: horizScale(40),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.white,
        fontSize: Fonts.size.regular
    },
    headerText1: {
        color: Colors.black,
        fontSize: Fonts.size.h5,
        marginLeft: horizScale(20),
        marginTop: vertScale(5),
        lineHeight: vertScale(30)
    },
    headerText2: {
        color: Colors.button,
        fontSize: Fonts.size.h3,
        marginLeft: horizScale(20),
        lineHeight: vertScale(40)
    },
    sortLine: {
        height: vertScale(3.5),
        width: horizScale(35),
        borderRadius: horizScale(20),
        backgroundColor: Colors.button,
        marginLeft: horizScale(20),
    },
    longLine: {
        height: vertScale(6),
        width: horizScale(80),
        borderRadius: horizScale(20),
        backgroundColor: Colors.button,
        marginLeft: horizScale(20),
        margin: horizScale(8),
    },
    horizline: {
        height: vertScale(1.5),
        width: '90%',
        borderRadius: horizScale(20),
        backgroundColor: Colors.gray,
        alignSelf: 'center',
    },
    mediumText: {
        fontSize: Fonts.size.regular,
        marginLeft: horizScale(20),
        lineHeight: vertScale(20),
        color: Colors.black,
    },
    multiChoiceBox: {
        flexDirection: 'row',
        borderWidth: horizScale(1),
        width: horizScale(93),
        height: vertScale(28),
        borderRadius: horizScale(25),
        borderColor: Colors.button,
        // backgroundColor: condition ? Color : Color,
        alignItems: 'center',
        justifyContent: 'center',
        margin: horizScale(5),
    },
    multiChoiceBoxText: {
        fontSize: Fonts.size.tiny,
        // color: condition:Colors:Colors,
        paddingHorizontal: horizScale(5)
    },
    backView: {
        flexDirection: 'row',
        marginLeft: horizScale(20),
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    backText: {
        color: Colors.gray,
        marginLeft: horizScale(10),
        fontSize: Fonts.size.medium,
        fontFamily: 'WorkSans-Regular',
        textAlignVertical: 'center',
        height: '100%'
    },
    drawerButton: {
        backgroundColor: Colors.white,
        padding: '3%',
        paddingLeft: '6%',
        borderTopRightRadius: horizScale(25),
        borderBottomRightRadius: horizScale(25),
    },
    drawerImage: {
        alignContent: 'flex-end',
        height: vertScale(20),
        width: horizScale(20),
        resizeMode: 'contain'
    },
    headermessageview: {
        width: horizScale(45),
        height: horizScale(45),
        borderRadius: horizScale(22.5),
        backgroundColor: Colors.white,
        marginLeft: horizScale(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    rupeeicon: {
        marginTop: vertScale(2),
        height: horizScale(12),
        width: horizScale(12),
        resizeMode: 'contain',
        tintColor: Colors.button,
    },
    smallIcon: {
        height: horizScale(15),
        width: horizScale(15),
        resizeMode: 'contain',
        tintColor: Colors.button,
    },
    backImage: {
        height: horizScale(25),
        width: horizScale(25),
        resizeMode: 'contain',
        tintColor: Colors.button,
    },
    smallProfile: {
        borderRadius: horizScale(30),
        height: horizScale(60),
        width: horizScale(60),
        resizeMode: 'cover'
    }
})
export default GloableStyle;
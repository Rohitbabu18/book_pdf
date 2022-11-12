import React from 'react';
import {Dimensions, View, Text as RNText} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

//const countries = require('i18n-iso-countries')
//countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

const REFERENCE_WIDTH = 414;
const REFERENCE_HEIGHT = 736;

const {height, width} = Dimensions.get('window');

// Scale according to reference size based on the the 360x640 mockups
const horizScale = val => width * (val / REFERENCE_WIDTH);

// Position vertically according to the 360x640 mockups
const vertScale = val => height * (val / REFERENCE_HEIGHT);

const primaryColor = '#44B7CC';
const colorGray = '#F8F8F8';
const primaryTextColor = '#3E3E3F';
const secondaryTextColor = '#403F41';

const basePadding = horizScale(20);
const baseSpacing = horizScale(20);
const FEE_CURRENCY = 'AUD';
const CALENDAR_TITLE = 'HELPA Video Consult';
const APP_NAME = 'HELPA';

const imageHostURI = 'https://res.cloudinary.com/hbird/image/upload';
const transformURI = '/c_fill,w_100,h_100,g_face,dpr_2.0';
const fileHostURI = __DEV__
  ? 'https://helpa-prod.s3-ap-southeast-2.amazonaws.com/helpa-prod'
  : 'https://helpa-prod.s3-ap-southeast-2.amazonaws.com/helpa-prod';

const supportedServices = [
  'Behavior Therapy',
  'Occupational Therapy',
  'Physiotherapy',
  'Special Education',
  'Speech Therapy',
];

// const countryOptions = () => {
//   var arr = Object.values(countries.getNames("en")).map(d => ({title: d, value: d}))
//   arr.unshift({title: 'Select Country', value: '-1'});
//   return arr;
// }

const validateEmail = email => {
  let re =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  return re.test(email);
};

const SectionHeader = props => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: horizScale(20),
      marginTop: baseSpacing,
    }}>
    <View
      style={{
        width: basePadding,
        height: horizScale(20),
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
    <View
      style={{
        flex: 2,
        backgroundColor: primaryColor,
        height: horizScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10,
      }}>
      <RNText
        style={{
          color: '#FFF',
          fontSize: horizScale(12),
          fontFamily: 'Lato-Black',
        }}>
        {props.label}
      </RNText>
    </View>
  </View>
);
SectionHeader.propTypes = {
  label: PropTypes.string,
};

const SectionHeaderLine = props => (
  <View
    style={{
      marginLeft: basePadding,
      flexDirection: 'row',
      marginTop: horizScale(20),
    }}>
    <View
      style={{
        borderBottomWidth: horizScale(5),
        borderBottomColor: primaryColor,
        paddingRight: horizScale(5),
      }}>
      <Text
        style={{
          fontSize: horizScale(15),
          color: 'black',
          width: '100%',
          fontWeight: '600',
          paddingBottom: horizScale(8),
        }}>
        {props.label}
      </Text>
    </View>
    <View
      style={{
        flex: 1,
        borderBottomWidth: horizScale(1),
        borderBottomColor: '#EAEAEA',
      }}
    />
  </View>
);
SectionHeaderLine.propTypes = {
  label: PropTypes.string,
};

const Spacer = props => (
  <View style={{width: '100%', height: horizScale(props.height)}} />
);
Spacer.propTypes = {
  height: PropTypes.number,
};

const substring = str =>
  str && str.length > 120 ? `${str.substring(0, 120)}...` : str;

const Heading = props => (
  <View
    style={{
      width: '100%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      paddingLeft: basePadding,
      paddingTop: horizScale(20),
    }}>
    <MediumText style={{fontSize: horizScale(18), color: primaryColor}}>
      {props.title}
    </MediumText>
    {props.subtitle && <Spacer height={5} />}
    {props.subtitle && (
      <Text style={{fontSize: horizScale(14), color: '#000'}}>
        {props.subtitle}
      </Text>
    )}
  </View>
);
Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

const BlackText = props => (
  <RNText
    style={[props.style, {fontFamily: 'WorkSans-Black'}]}
    allowTextFontScaling={true}>
    {props.children}
  </RNText>
);

const Text = props => (
  <RNText
    style={[props.style, {fontFamily: 'WorkSans-Regular'}]}
    allowTextFontScaling={true}>
    {props.children}
  </RNText>
);

const MediumText = props => (
  <RNText
    style={[props.style, {fontFamily: 'WorkSans-Medium'}]}
    allowTextFontScaling={true}>
    {props.children}
  </RNText>
);

const BoldText = props => (
  <RNText
    style={[props.style, {fontFamily: 'WorkSans-Bold'}]}
    allowTextFontScaling={true}>
    {props.children}
  </RNText>
);

const HeavyText = props => (
  <RNText
    style={[props.style, {fontFamily: 'WorkSans-Thin'}]}
    allowTextFontScaling={true}>
    {props.children}
  </RNText>
);

const isValidCountryCode = c => countries.isValid(c);

// See http://stackoverflow.com/a/3561711/556609
String.prototype.replaceAll = function (strReplace, strWith) {
  var esc = strReplace.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  var reg = new RegExp(esc, 'ig');
  return this.replace(reg, strWith);
};

// https://flaviocopes.com/how-to-uppercase-first-letter-javascript/
const capitalize = s => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const formatAssessment = (a, profile) => {
  if (profile && profile.gender != null) {
    var _pronoun = 'his/her';
    var _pronounAdj = 'him/her';
    var _self = 'himself/herself';
    var _pronoun2 = 'he/she';

    if (profile.gender === 'Male') {
      _pronoun = 'his';
      _pronounAdj = 'him';
      _self = 'himself';
      _pronoun2 = 'he';
    } else if (profile.gender === 'Female') {
      _pronoun = 'her';
      _pronounAdj = 'her';
      _self = 'herself';
      _pronoun2 = 'she';
    }
    return a
      .replaceAll('My Child', capitalize(profile.firstname))
      .replaceAll(' are ', ` is `)
      .replaceAll(' were ', ` was `)
      .replaceAll('themself', `${_self}`)
      .replaceAll(' their ', ` ${_pronoun} `)
      .replaceAll('themselves', `${_self}`)
      .replaceAll(' they ', ` ${_pronoun2} `)
      .replaceAll(' them ', ` ${_pronounAdj} `);
  }
  return a;
};

export {
  horizScale,
  vertScale,
  primaryColor,
  colorGray,
  basePadding,
  baseSpacing,
  secondaryTextColor,
  imageHostURI,
  transformURI,
  fileHostURI,
  supportedServices,
  substring,
  //getCoverImage,
  //  getBehaviourImage,
  //  getErrorMessage,
  //countryOptions,
  // coverImages,
  formatAssessment,
  SectionHeader,
  SectionHeaderLine,
  Spacer,
  Heading,
  BlackText,
  Text,
  MediumText,
  BoldText,
  HeavyText,
  FEE_CURRENCY,
  CALENDAR_TITLE,
  validateEmail,
  APP_NAME,
};

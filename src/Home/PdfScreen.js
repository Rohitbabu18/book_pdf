import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import FocusStatusBar from '../Utils/components/StatusBar';
import CustomImage from '../Utils/Images';
import {horizScale} from '../Utils/LayoutUtil';
import Fonts from '../Utils/Fonts';

const PdfScreen = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <FocusStatusBar
        backgroundColor={Colors.white}
        barStyle={'dark-content'}
      />
      <View style={styles.rowView}>
        <TouchableOpacity
          style={{flex: 0.1}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={CustomImage.leftarr} style={styles.icon} />
        </TouchableOpacity>
        <View style={{flex: 0.8}}>
          <Text style={styles.bookName}>{item.name}</Text>
          <Text style={styles.writeName}>{item.writer}</Text>
        </View>
        <TouchableOpacity
          style={{flex: 0.1}}
          onPress={() => {
            alert('Coming Soon');
          }}>
          <Image source={CustomImage.threedot} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.allText}>
          This is why we suggest children read books from an early age to gain
          knowledge. The best part about books is that there are various types
          of books. One can read any type to gain different types of knowledge.
          Reading must be done by people of all ages. It not only widens our
          thinking but also enhances our vocabulary. {'\n'}
          {'\n'}
          There are different genres of books available for book readers. Every
          day, thousands of books are released in the market ranging from travel
          books to fictional books. We can pick any book of our interest to
          expand our knowledge and enjoy the reading experience. {'\n'}
          {'\n'}
          Firstly, we have travel books, which tell us about the experience of
          various travelers. They introduce us to different places in the world
          without moving from our place. It gives us traveling tips which we can
          use in the future. Then, we have history books which state historical
          events. They teach about the eras and how people lived in times gone
          by. {'\n\n'}
          Furthermore, we have technology books that teach us about
          technological developments and different equipment. You can also read
          fashion and lifestyle books to get up to date with the latest trends
          in the fashion industry.{'\n\n'}
          Most importantly, there are self-help books and motivational books.
          These books help in the personality development of an individual. They
          inspire us to do well in life and also bring a positive change in
          ourselves. Finally, we have fictional books. They are based on the
          writer’s imagination and help us in enhancing our imagination too.
          They are very entertaining and keep us intrigued until the very end.
          {'\n\n'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PdfScreen;

const styles = StyleSheet.create({
  allText: {
    color: Colors.gray,
    fontSize: Fonts.size.regular,
    lineHeight: horizScale(20),
    margin: horizScale(30),
  },
  writeName: {
    textAlign: 'center',
    color: Colors.gray,
  },
  bookName: {
    color: Colors.black,
    fontWeight: Fonts.weight.bold,
    textAlign: 'center',
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: horizScale(25),
    marginTop: horizScale(15),
  },
  icon: {
    height: horizScale(20),
    width: horizScale(20),
  },
});

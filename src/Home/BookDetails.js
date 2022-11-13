import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import FocusStatusBar from '../Utils/components/StatusBar';
import CustomImage from '../Utils/Images';
import Colors from '../Utils/Colors';
import {horizScale} from '../Utils/LayoutUtil';
import Fonts from '../Utils/Fonts';

const BookDetails = ({navigation, route}) => {
  const [bookmark, setBookmark] = useState(false);
  const {item} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <FocusStatusBar
        backgroundColor={Colors.white}
        barStyle={'dark-content'}
      />

      <View style={styles.rowView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={CustomImage.leftarr} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setBookmark(!bookmark);
          }}>
          <Image
            source={CustomImage.bookmark}
            style={{
              ...styles.icon,
              tintColor: bookmark ? Colors.button : Colors.black,
            }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Image source={{uri: item.uri}} style={styles.mainImg} />
        <Text style={styles.bookName}>{item.name}</Text>
        <Text style={styles.writerName}>{item.writer}</Text>
        <View style={styles.contentView}>
          <Text style={styles.aboutText}>About the author</Text>
          <Text style={styles.aboutDetails}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quibusdam sint blanditiis voluptatem officiis provident dicta nisi,
            eligendi ab dolores quis labore necessitatibus illo, qui fugiat hic
            quo! Illo, dolore.
          </Text>
          <Text style={styles.aboutText}>Overview</Text>
          <Text style={styles.aboutDetails}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ipsa sit libero. Quisquam sapiente soluta omnis adipisci
            vel officia saepe quia libero hic laboriosam provident, sequi
            praesentium nostrum in, atque expedita minus ullam. Dolores quisquam
            dolor corporis recusandae Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente laborum quasi placeat, cum saepe
            accusantium maxime id, nisi eveniet enim rem. Consectetur cum, ipsam
            eius nam nesciunt laboriosam odit vel cupiditate cumque. Earum
            dicta, inventore non ratione minus iusto nisi voluptate officiis
            magnam incidunt quod velit, sequi sapiente minima deserunt
            consequatur blanditiis cum sint rem amet illo assumenda. Mollitia
            rem expedita ipsam. Voluptas doloribus nulla aperiam odit labore
            dolore deleniti eaque quaerat assumenda perferendis consequuntur eos
            delectus earum, amet autem dicta hic commodi placeat eius numquam
            consequatur quam asperiores. Harum, culpa deleniti. Velit animi
            molestias dicta repudiandae quaerat debitis adipisci consequatur,
            doloribus totam reiciendis magnam laboriosam voluptatibus recusandae
            iusto similique veritatis, ipsam doloremque aspernatur praesentium
            fugit. Necessitatibus error sed ab harum magnam deleniti debitis,
            nisi cumque accusantium hic eos fugit alias obcaecati provident,
            autem blanditiis labore id reprehenderit minus architecto nostrum!
            Cupiditate doloribus adipisci dolorum rem placeat eveniet quidem,
            voluptate eum similique. Maiores sed mollitia dignissimos facilis
            nisi adipisci asperiores eveniet tempora itaque saepe rem pariatur
            dolor esse eligendi, quas debitis animi natus error explicabo
            repudiandae. Labore corporis dignissimos deleniti dolorum dolorem
            modi cumque obcaecati, dolore perspiciatis voluptate sint provident
            aperiam fugiat tempora quae. Eum tenetur quidem adipisci debitis a
            error esse iusto animi explicabo quibusdam quo possimus at, ex hic
            dolorum aspernatur voluptates similique. Eos consequatur iure vel
            earum iusto consectetur, cupiditate ab voluptatum dolorem quisquam
            quibusdam aperiam numquam nihil! Eos saepe accusantium numquam
            minima ut, rerum sunt sed? Praesentium ad magni in et aliquam
            adipisci labore rerum dolorem perspiciatis nesciunt itaque
            aspernatur soluta incidunt aliquid, commodi atque pariatur
            recusandae possimus voluptatum. Eum id exercitationem provident
            repellendus ullam laborum perspiciatis labore sapiente magni fuga
            molestiae consequatur ipsam qui atque, ipsum distinctio nihil ut. Ut
            illum earum aut quisquam magni? Eaque laudantium unde consectetur
            iusto temporibus. Quos reiciendis vitae molestiae.
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.readBtn}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('PdfScreen', {item});
        }}>
        <Text style={styles.readBtnText}>Subscribe</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  readBtnText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: Fonts.weight.w6,
  },
  readBtn: {
    backgroundColor: Colors.button,
    padding: horizScale(15),
    margin: horizScale(20),
    borderRadius: horizScale(15),
    width: '50%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: horizScale(30),
    elevation: 5,
  },
  aboutDetails: {
    color: '#767676',
    marginBottom: horizScale(15),
  },
  aboutText: {
    color: Colors.black,
    fontSize: Fonts.size.input,
    fontWeight: Fonts.weight.bold,
    marginBottom: horizScale(5),
  },
  contentView: {
    marginHorizontal: horizScale(30),
    marginVertical: horizScale(20),
  },
  writerName: {
    textAlign: 'center',
    color: Colors.gray,
    fontSize: Fonts.size.regular,
    marginVertical: horizScale(5),
    marginHorizontal: horizScale(20),
  },
  bookName: {
    textAlign: 'center',
    color: Colors.black,
    fontSize: Fonts.size.input,
    fontWeight: Fonts.weight.w7,
    marginHorizontal: horizScale(20),
  },
  mainImg: {
    height: horizScale(330),
    width: horizScale(230),
    borderRadius: horizScale(20),
    alignSelf: 'center',
    marginVertical: horizScale(10),
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: horizScale(30),
    marginTop: horizScale(15),
  },
  icon: {
    height: horizScale(25),
    width: horizScale(25),
  },
});

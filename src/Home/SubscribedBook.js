import React, { useState } from 'react';
import {
    Alert, FlatList, Image,
    SafeAreaView,
    StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    View,
    ImageBackground,
    Pressable
} from 'react-native';

import GloableStyle from '../Utils/components/GloableStyle';
// import HeaderNotificationAndMessage from '../Utils/components/HeaderNotificationAndMessage';
import Colors from '../Utils/Colors';
import Fonts from '../Utils/Fonts';
import CustomImage from '../Utils/Images';
import { BoldText, horizScale, MediumText, Spacer, vertScale } from '../Utils/LayoutUtil';
import FocusStatusBar from '../Utils/components/StatusBar';
export default function SubscribedBook(props) {
    const [state, setState] = useState({
        searchedHospital: '',
        hospitalData: [
            {
                id: 4,
                name: 'RajBhasha ke rup mai Hindi',
                writer: 'mr. Rohit',
                uri: 'https://www.nbtindia.gov.in/writereaddata/booksimages/2737.jpg',
                category: 'Novel',
                rating: 5,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est a ea aliquid iste incidunt delectus, quae quasi, dolorum cumque facilis, fuga excepturi ratione reiciendis eaque nisi sequi. Dolores, tempore. Placeat in vitae fugiat eveniet, eius quam. Minus, laudantium voluptates doloremque tempore ipsam amet aperiam, reiciendis et aliquam assumenda ad.',
            },
            {
                id: 3,
                name: 'Gandhi Adhyan',
                writer: 'mr. Rohit',
                uri: 'http://booksyaari.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/g/a/gandhi-adhyayan-.jpeg',
                category: 'Novel',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est a ea aliquid iste incidunt delectus, quae quasi, dolorum cumque facilis, fuga excepturi ratione reiciendis eaque nisi sequi. Dolores, tempore. Placeat in vitae fugiat eveniet, eius quam. Minus, laudantium voluptates doloremque tempore ipsam amet aperiam, reiciendis et aliquam assumenda ad.',
                rating: 4.2,
            },
            {
                id: 9,
                name: 'Namak Swadanusar',
                writer: 'mr. Rohit',
                uri: 'https://1.bp.blogspot.com/-8XboFzwAIMY/X03fulYM9MI/AAAAAAAAClk/Cvss0cfJy1cy1_q7X8ImlzGWHA9StwKAQCLcBGAsYHQ/w680/Namak-Swadanusar-book-pdf-download.webp',
                category: 'Novel',
                rating: 4,
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est a ea aliquid iste incidunt delectus, quae quasi, dolorum cumque facilis, fuga excepturi ratione reiciendis eaque nisi sequi. Dolores, tempore. Placeat in vitae fugiat eveniet, eius quam. Minus, laudantium voluptates doloremque tempore ipsam amet aperiam, reiciendis et aliquam assumenda ad.',
            },

            {
                id: 5,
                name: 'The Gilded Ones',
                writer: 'mr. bab dsknsd dsknfsd v dsk scsu',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRY-olBEQRCLT3b84680F8d6HlbYZiqgCLvasyvkbnXMkk8GkKLvH-aVf8UF1EzCBuqjg&usqp=CAU',
                category: 'Novel',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est a ea aliquid iste incidunt delectus, quae quasi, dolorum cumque facilis, fuga excepturi ratione reiciendis eaque nisi sequi. Dolores, tempore. Placeat in vitae fugiat eveniet, eius quam. Minus, laudantium voluptates doloremque tempore ipsam amet aperiam, reiciendis et aliquam assumenda ad.',

                rating: 2.5,
            },
            {
                id: 6,
                name: 'Dune Frank Herbert',
                writer: 'mr. Rohit',
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AeOk5au6fGIAMwh2BX9Ag-5K_kauaiQBIVC6JEBs1w82t335OHtl9HNSLeWKRXzUATI&usqp=CAU',
                category: 'Novel',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis est a ea aliquid iste incidunt delectus, quae quasi, dolorum cumque facilis, fuga excepturi ratione reiciendis eaque nisi sequi. Dolores, tempore. Placeat in vitae fugiat eveniet, eius quam. Minus, laudantium voluptates doloremque tempore ipsam amet aperiam, reiciendis et aliquam assumenda ad.',
                rating: 3.5,
            },
        ]

    })


    return (
        <SafeAreaView style={GloableStyle.container}>
            <FocusStatusBar backgroundColor={Colors.statusBar} barStyle='dark-content' />
            <Spacer height={5} />
            <View
                style={{ ...GloableStyle.backView, marginLeft: 0 }}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.goBack();
                    }}
                    style={GloableStyle.backView}>
                    <Image
                        source={CustomImage.back}
                        style={GloableStyle.backText}
                    />
                </TouchableOpacity>
                <MediumText style={styles.headertext}>Back</MediumText>
                {/* <HeaderNotificationAndMessage {...props} /> */}
            </View>
            <TouchableOpacity onPress={() => { alert('Coming Soon') }}
                style={styles.search}>
                <Image source={CustomImage.search} style={{ marginLeft: horizScale(20) }}></Image>
                <TextInput
                    placeholder='Search'
                    placeholderTextColor={Colors.gray}
                    maxLength={50}
                    onChangeText={(hospital) => { setState({ ...state, searchedHospital: hospital }) }}
                    style={styles.searchtext}></TextInput>

            </TouchableOpacity>
            <Spacer height={15} />
            <View style={styles.listheadertext}>
                <MediumText style={{ fontSize: Fonts.size.input, color: Colors.black }}>Your Books</MediumText>
                {/* <TouchableOpacity style={styles.category} onPress={() => {
                    setState({
                        ...state,
                        modalVisible: true
                    })
                }}>
                    <Text style={{ color: Colors.black }}>{state.sortby}</Text>
                    <Image style={styles.arrodown} source={CustomImage.Group879}></Image>
                </TouchableOpacity> */}
            </View >
            <Spacer height={5} />
            <FlatList
                data={state.hospitalData}
                //  style={{ marginBottom: vertScale(10) }}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => {
                            alert('Coming Soon')
                        }}
                        style={styles.flatlist}>
                        <Image source={{ uri: item.uri }} style={styles.hospitallogo}></Image>
                        <View style={{ justifyContent: 'space-evenly', alignItems: 'flex-start', height: horizScale(100) }}>

                            <Text numberOfLines={1} style={styles.hospitalname}>{item.name}</Text>
                            <Text numberOfLines={2} style={styles.writer}>{item.writer}</Text>
                            <Text numberOfLines={2} style={styles.description}>{item.description}</Text>
                        </View>

                    </Pressable>
                )}
            ></FlatList>
            {/* <Modal
                style={{ margin: 0, justifyContent: 'flex-end' }}
                isVisible={state.modalVisible}
                transparent={true}
                animationType='slide'
                onRequestClose={() => { setState({ ...state, modalVisible: false }) }}
                onBackdropPress={() => { setState({ ...state, modalVisible: false }) }}
            >
                <FocusStatusBar backgroundColor={'rgba(52,52,52,0.88)'} />
                <View style={{ backgroundColor: Colors.white, borderTopRightRadius: horizScale(35), borderTopLeftRadius: horizScale(35) }}>
                    <Spacer height={20} />
                    <Text style={{ fontSize: Fonts.size.input, alignSelf: 'center', color: Colors.button }}>Category</Text>
                    <View style={{ marginLeft: horizScale(15), marginVertical: vertScale(25) }}>
                        <FlatList
                            data={state.sort}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{ flexDirection: 'row', marginTop: vertScale(10) }}
                                    onPress={() => {
                                        setState({
                                            ...state,
                                            sortby: item.name,
                                            modalVisible: false
                                        })
                                    }}
                                >
                                    <Image source={CustomImage.Group2373}
                                        style={{ ...styles.sortimagecircul, tintColor: state.sortby === item.name ? Colors.button : Colors.gray }}
                                    />
                                    <Text>Sort by {item.name}</Text>
                                </TouchableOpacity>
                            )} />
                    </View>
                </View>
            </Modal> */}

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    sortimagecircul: {
        height: horizScale(20),
        width: horizScale(20),
        resizeMode: 'contain',
        marginHorizontal: horizScale(5)
    },
    detailtext: {
        fontSize: Fonts.size.small,
        color: Colors.white,
        textAlignVertical: 'center'
    },
    hospitalbotton: {
        height: vertScale(32),
        width: horizScale(90),
        backgroundColor: Colors.button,
        borderRadius: horizScale(25),
        justifyContent: 'center',
        alignItems: 'center',
    },
    hospitalname: {
        fontSize: Fonts.size.regular,
        color: Colors.black,
        width: horizScale(200),
        marginLeft: horizScale(10),
        textAlignVertical: 'center',
    },
    writer: {
        fontSize: Fonts.size.small,
        color: Colors.button,
        width: horizScale(200),
        marginLeft: horizScale(10),
        textAlignVertical: 'center',
    },
    description: {
        fontSize: Fonts.size.medium,
        color: Colors.gray,
        width: horizScale(200),
        marginLeft: horizScale(10),
        textAlignVertical: 'center',
    },
    hospitallogo: {
        height: horizScale(120),
        width: horizScale(120),
        resizeMode: 'cover',
        borderRadius: horizScale(10),
        margin: horizScale(10)
    },
    arrodown: {
        marginLeft: horizScale(10),
        height: vertScale(10),
        width: horizScale(10),
        resizeMode: 'contain',
        tintColor: Colors.black,
    },
    listheadertext: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizScale(20)
    },
    searchtext: {
        marginLeft: horizScale(10),
        width: '80%',
        fontSize: Fonts.size.regular,
        color: Colors.black

    },
    search: {
        height: vertScale(50),
        width: '90%',
        backgroundColor: Colors.white,
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: vertScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 9
    },
    category: {
        height: vertScale(30),
        width: horizScale(180),
        borderRadius: horizScale(20),
        backgroundColor: Colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flatlist: {
        flexDirection: 'row',
        width: '95%',
        backgroundColor: Colors.white,
        borderRadius: horizScale(15),
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: vertScale(5),
    },
    headertext: {
        marginLeft: horizScale(15),
        fontSize: Fonts.size.h6,
        width: '50%',
        color: Colors.black,
    },
})
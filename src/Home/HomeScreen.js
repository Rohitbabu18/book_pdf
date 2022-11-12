import { View, Text, SafeAreaView, StatusBar, FlatList, Image, StyleSheet, TextInput, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../Utils/Colors'
import { horizScale, Spacer } from '../Utils/LayoutUtil'
import Fonts from '../Utils/Fonts'
import CustomImage from '../Utils/Images'

const HomeScreen = () => {
    const [search, setSearch] = useState('')
    const [book, setBook] = useState([
        {
            id: 4,
            name: 'RajBhasha ke rup mai Hindi',
            writer: 'mr. Rohit',
            uri: 'https://www.nbtindia.gov.in/writereaddata/booksimages/2737.jpg',
            category: 'Novel'
        },
        {
            id: 3,
            name: 'Gandhi Adhyan',
            writer: 'mr. Rohit',
            uri: 'http://booksyaari.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/g/a/gandhi-adhyayan-.jpeg',
            category: 'Novel'
        },
        {
            id: 9,
            name: 'Namak Swadanusar',
            writer: 'mr. Rohit',
            uri: 'https://1.bp.blogspot.com/-8XboFzwAIMY/X03fulYM9MI/AAAAAAAAClk/Cvss0cfJy1cy1_q7X8ImlzGWHA9StwKAQCLcBGAsYHQ/w680/Namak-Swadanusar-book-pdf-download.webp',
            category: 'Novel'
        },

        {
            id: 5,
            name: 'The Gilded Ones',
            writer: 'mr. bab dsknsd dsknfsd v dsk scsu',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRY-olBEQRCLT3b84680F8d6HlbYZiqgCLvasyvkbnXMkk8GkKLvH-aVf8UF1EzCBuqjg&usqp=CAU',
            category: 'Novel'
        },
        {
            id: 6,
            name: 'Dune Frank Herbert',
            writer: 'mr. Rohit',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9AeOk5au6fGIAMwh2BX9Ag-5K_kauaiQBIVC6JEBs1w82t335OHtl9HNSLeWKRXzUATI&usqp=CAU',
            category: 'Novel'
        },
        {
            id: 7,
            name: 'Berlin Game',
            writer: 'mr. Rohit',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwVHM-YrW7faQWI_JskU5VtJgGSTz9HSwk3_bhs2WP0WYspMsiGYc5Qemm8etqdr77zs&usqp=CAU',
            category: 'Novel'
        },
        {
            id: 8,
            name: 'Africa Risen',
            writer: 'mr. Rohit',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReiX6PGPY-SuBQBu9lYzd2k50ThSAgIjuULQ&usqp=CAU',
            category: 'Novel'
        },
        {
            id: 1,
            name: 'Book long name for test skj dkjc sdskj csdjk d Name',
            writer: 'mr. bab dsknsd dsknfsd v dsk scsu',
            uri: 'https://d3ui957tjb5bqd.cloudfront.net/uploads/images/4/49/49666.pinterest.jpg?fmt=webp&1526922327',
            category: 'Novel'
        },
        {
            id: 2,
            name: 'Book Name',
            writer: 'mr. Rohit',
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwHw7CePtjBcs5_7zCbKbhCb51uDMK47fKJ54VAs0HJhVZb_6KJKgLsyRnrXE28oPDVz4&usqp=CAU',
            category: 'Novel'
        },

    ])
    return (
        <SafeAreaView>
            <StatusBar backgroundColor={Colors.cosmic} barStyle={'light-content'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerContainer}>
                    <View style={styles.headerView}>
                        <View style={{
                            borderWidth: horizScale(2),
                            borderColor: Colors.white,
                            borderRadius: horizScale(30)
                        }}>
                            <Image source={CustomImage.profile} style={styles.profileImage} />
                        </View>
                        <Pressable
                            style={styles.bottonView}
                            onPress={() => {
                                alert('Coming Soon')
                            }}
                        >
                            <Text style={styles.bottonText}>Subscribed Books</Text>
                        </Pressable>
                    </View>
                    <View style={styles.searchView}>
                        <TextInput
                            style={styles.searchText}
                            placeholder='Find Books Here ...'
                            placeholderTextColor={Colors.gray}
                            onChangeText={(value) => {
                                setSearch(value)
                            }} />
                        <Pressable
                            style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => {
                                alert('Coming Soon')
                            }}
                        >
                            <Image source={CustomImage.search} style={styles.smallIcon} />
                        </Pressable>
                    </View>
                </View>
                <Spacer height={30} />
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={book}
                    numColumns={2}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable
                                onPress={() => {
                                    alert('Coming Soon')
                                }}
                                style={styles.bookContainer}>
                                <Image source={{ uri: item.uri }} style={styles.bookImage} />
                                <Text style={styles.bookName}>{item.name}</Text>
                                <Text style={styles.bookWriter}>{item.writer}</Text>
                            </Pressable>
                        )
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    bottonText: {
        fontSize: Fonts.size.small,
        color: Colors.black
    },
    bottonView: {
        backgroundColor: Colors.white,
        padding: horizScale(10),
        borderRadius: horizScale(10),
        elevation: 10
    },
    headerContainer: {
        backgroundColor: Colors.cosmic,
        height: horizScale(105),
        borderBottomLeftRadius: horizScale(50),
        borderBottomRightRadius: horizScale(50)
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: horizScale(20),
        marginVertical: horizScale(10)
    },
    profileImage: {
        width: horizScale(55),
        height: horizScale(55),
        borderRadius: horizScale(30),
    },
    searchText: {
        flex: 0.9,
        color: Colors.gray,
    },
    searchView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.backWhite,
        marginHorizontal: horizScale(30),
        borderRadius: horizScale(8),
        elevation: 8,
        paddingHorizontal: horizScale(15),
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: horizScale(-20)
    },
    bookImage: {
        height: horizScale(250),
        width: '80%',
        borderRadius: horizScale(10),
        elevation: 10
    },
    bookName: {
        textAlign: 'center',
        fontSize: Fonts.size.regular,
        color: Colors.black,
        width: '80%',
    },
    bookWriter: {
        textAlign: 'center',
        fontSize: Fonts.size.das,
        color: Colors.black,
        width: '85%',
    },
    bookContainer: {
        width: '50%',
        alignItems: 'center',
        marginVertical: horizScale(20)
    },
    smallIcon: {
        height: horizScale(22),
        width: horizScale(22)
    }
})
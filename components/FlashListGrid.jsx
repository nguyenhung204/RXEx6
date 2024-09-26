import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const DATA = [
    { id: '1', title: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', image: 'link_to_image_1' },
    { id: '2', title: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', image: 'link_to_image_2' },
    { id: '3', title: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', image: 'link_to_image_3' },
    { id: '4', title: 'Cáp chuyển từ Cổng USB sang PS2', price: '69.900 đ', image: 'link_to_image_4' },
    // ... thêm các sản phẩm khác
];

const FlashListGrid = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={28} color="white" />
                <View >
                <TextInput style={styles.searchInput} />
                    <Ionicons style={styles.searchIcon} name="search-sharp" size={28} color="black" />
                </View>

                <View>
                    <Ionicons name="cart-outline" size={28} color="white" />
                </View>
                <View>
                    <MaterialCommunityIcons name="dots-horizontal" size={28} color="white" />
                </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.rating}>⭐⭐⭐⭐⭐ (15)</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={2}
            />
            <View style={styles.navBar}>
                <TouchableOpacity style={styles.navItem}>
                    <MaterialCommunityIcons name="format-list-checkbox" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <SimpleLineIcons name="home" size={28} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.navItem}>
                    <AntDesign name="back" size={28} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 10,
        width: '100%',
        justifyContent: 'space-between'
    },
    searchInput: {
        flex: 1,
        paddingLeft: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        width: '100%',
        marginRight: 10,
        position: 'relative'

    },
    searchIcon: {
        position: 'absolute',
        top: 5,
        left: 10,
        zIndex: 1
    },
    item: {
        flex: 1,
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    price: {
        fontSize: 12,
        color: '#888',
    },
    rating: {
        fontSize: 12,
        color: '#FFD700', // Màu vàng cho sao
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#007bff', // Màu nền thanh điều hướng
        padding: 10,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
    }
});

export default FlashListGrid;
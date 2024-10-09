import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

const DATA = [
    { id: '1', title: 'Ca nấu lẩu, nấu mì mini...', price: 'Shop Devang', image: 'link_to_image_1' },
    { id: '2', title: '1KG KHÔ GÀ BƠ TỎI ...', price: 'Shop LTD Food', image: 'link_to_image_2' },
    { id: '3', title: 'Xe cần cẩu đa năng', price: 'Shop Thế giới đồ chơi', image: 'link_to_image_3' },
    { id: '4', title: 'Đồ chơi dạng mô hình', price: 'Shop Thế giới đồ chơi', image: 'link_to_image_4' },
    { id: '5', title: 'Lãnh đạo giản đơn', price: 'Shop Minh Long Book', image: 'link_to_image_5' },
    { id: '6', title: 'Hiểu lòng con trẻ', price: 'Shop Minh Long Book', image: 'link_to_image_6' },
    // ... thêm các sản phẩm khác
];

const FlashListLayout= () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="arrow-back" size={28} color="white" />
                <Text style={{ color: '#FFFF' }}>Chat</Text>
                <Ionicons name="cart-outline" size={28} color="white" />
            </View>
            <Text style={{ padding: 20 }}>Bạn có thắc mắc gì với sản phẩm vừa xem. Đừng ngại chat với shop !</Text>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.itemInfo}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                        <TouchableOpacity style={styles.chatButton}>
                            <Text style={styles.chatButtonText}>Chat</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id}
                numColumns={1}
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
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginRight: 10,
    },
    itemInfo: {
        flex: 1,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 12,
        color: '#888',
    },
    chatButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    chatButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#007bff',
        padding: 10,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
    }
});

export default FlashListLayout;
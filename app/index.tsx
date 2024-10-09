import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FlashListGrid from './../components/FlashListGrid';
import FlashListLayout from './../components/FlashListLayout';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
        {/* <FlashListLayout /> */}
        <FlashListGrid />
    </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
});


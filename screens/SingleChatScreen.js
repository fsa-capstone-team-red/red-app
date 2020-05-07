import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function SingleChatScreen() {
	return <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fafafa'
	},
	contentContainer: {
		paddingTop: 15
	}
});

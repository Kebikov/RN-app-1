import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ddd from '@/Ddd';

export default function App() {

    const [] = useState<string>('www');

	return (
		<View style={styles.container}>
            <Ddd/>
			<Text>Тут текст.</Text>
			<StatusBar style='light' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useTypedNavigation from '@/hooks/useTypedNavigation';
import { TypeRootStackParamList } from '@/navigation/navigation.types';

const Home = () => {
    const {navigate} = useTypedNavigation();

	return (
		<View>
			<Text>Home</Text>
			<Pressable onPress={() => navigate('Auth')}>
                <Text>Go to Login</Text>
            </Pressable>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});

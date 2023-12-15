import { StatusBar } from 'expo-status-bar';
import { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '@/navigation/Navigation';

const App: FC = () => {

	return (
        <>
            <SafeAreaProvider>
                <Navigation/>
            </SafeAreaProvider>

            <StatusBar style='light'/>
        </>
	);
}


export default App;

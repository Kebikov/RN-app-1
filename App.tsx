import { StatusBar } from 'expo-status-bar';
import { FC, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '@/navigation/Navigation';

const App: FC = () => {

	return (
        <>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1 }}>
                    <Navigation/>
                    <StatusBar style='light' backgroundColor='black'/>
                </SafeAreaView>
            </SafeAreaProvider>
        </>
	);
}


export default App;

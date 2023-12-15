import { View, Text } from 'react-native';
import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TypeRootStackParamList } from './navigation.types';
import { userRoutes } from './user.routes';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
                    headerShown: false,
					contentStyle: {
						backgroundColor: 'red'
					}
				}}
			>
				{userRoutes.map(route => (
					<Stack.Screen
						name={route.name}
						component={route.component}
						key={route.name}
					/>
				))}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

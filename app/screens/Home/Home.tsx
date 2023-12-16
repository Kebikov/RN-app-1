import { Pressable, Text, View } from 'react-native';
import {FC} from 'react';
import useTypedNavigation from '@/hooks/useTypedNavigation';
import ButtonExit from '@/components/ButtonExit/ButtonExit';


const Home: FC = () => {
    const {navigate} = useTypedNavigation();

	return (
		<View className='mt-10'>
			<Text>Home</Text>
			<Pressable onPress={() => navigate('Auth')}>
                <Text style={{color: 'white'}}>Go to Login</Text>
            </Pressable>
		</View>
	);
};

export default Home;


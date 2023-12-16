import { View, Text, ActivityIndicator } from 'react-native';
import { FC } from 'react';

const Loader: FC = () => {
	return (
		<ActivityIndicator size={'large'} color={'#BF3335'}/>
	);
};

export default Loader;

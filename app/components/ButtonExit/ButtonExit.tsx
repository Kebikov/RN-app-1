import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { FC } from 'react';

/**
 * Component > кнопка для страницы регистрации.
 * @returns {Element}
 */
const ButtonExit: FC = () => {
	return (
		<Pressable style={style.button}>
            <Image source={require('@/source/icon/film-icon.png')} style={style.icon}/>
			<Text style={style.text}>Go to watch</Text>
		</Pressable>
	);
};

const style = StyleSheet.create({
    button: {
        flexDirection: 'row',
        width: '70%',
        height: 60,
        backgroundColor: '#b62f32',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 18
    },
    icon: {
        width: 24,
        height: 24,
        objectFit: 'cover',
        resizeMode: 'cover',
        marginRight: 8
    }
});

export default ButtonExit;



import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

interface IButtonExitProps {
    handleSubmit: Function,
    onSubmit: Function
}

/**
 * @component
 * Кнопка для страницы регистрации.
 * @param handleSubmit - Функция submit формы.
 * @example <ButtonExit handleSubmit={handleSubmit}/>
 * @returns {Element}
 */
const ButtonExit: FC<IButtonExitProps> = ({handleSubmit, onSubmit}) => {
	return (
        <Pressable style={style.button} onPress={handleSubmit(onSubmit)}>
            <LinearGradient colors={['#DC3F41', '#a6282b']} style={style.gradient} >
                <Image
                    source={require('@/source/icon/film-icon.png')}
                    style={style.icon}
                />
                <Text style={style.text}>Go to watch</Text>
            </LinearGradient>
        </Pressable>
	);
};

const style = StyleSheet.create({
	button: {
		marginBottom: 10,
		width: '70%',
		height: 60
	},
	gradient: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#b62f32',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16
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

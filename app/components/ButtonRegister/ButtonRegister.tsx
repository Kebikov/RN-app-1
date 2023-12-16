import { Pressable, Text, StyleSheet } from 'react-native';
import {ElementType, FC} from 'react';

/**
 * Component > кнопка регистрации.
 * @returns {ElementType}
 */
const ButtonRegister: FC = () => {
	return (
		<Pressable style={style.box}>
            <Text style={style.register}>Register</Text>
        </Pressable>
	);
};

const style = StyleSheet.create({
    box: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end'
    },
    register: {
        color: '#4F4F51',
        fontSize: 18,
    }
});


export default ButtonRegister;

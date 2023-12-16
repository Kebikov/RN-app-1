import { Pressable, Text, StyleSheet } from 'react-native';
import {FC} from 'react';

interface IButtonRegisterProps {
    /**
     * Функция изминения state.
     */
    setIsReg: Function
}

/**
 * @component
 * Кнопка регистрации.
 * @param setIsReg - Функция изминения state.
 * @example <ButtonRegister setIsReg={setIsReg} />
 * @returns {JSX.Element}
 */
const ButtonRegister: FC<IButtonRegisterProps> = ({setIsReg}) => {

	return (
		<Pressable style={style.box} onPress={() => setIsReg((isReg: boolean) => !isReg)}>
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

import { View, Text, StyleSheet } from 'react-native';
import {FC} from 'react';
//* components
import ButtonExit from '@/components/ButtonExit/ButtonExit';
import InputFieldsEnter from '@/components/InputFieldsEnter/InputFieldsEnter';
import ButtonRegister from '@/components/ButtonRegister/ButtonRegister';

/**
 * Screens > с полями для ввода логина и пароля.
 * @returns {Element}
 */
const Auth: FC = () => {

    

	return (
		<View style={style.center}>
            <View style={style.container}>
                <InputFieldsEnter/>
                <ButtonExit/>
                <ButtonRegister/>
            </View>
		</View>
	);
};

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
    }
})


export default Auth;


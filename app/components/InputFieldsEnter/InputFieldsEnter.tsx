import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { ElementType, FC } from 'react';

/**
 * Component > поля ввода логина и пароля.
 * @returns {ElementType}
 */
const InputFieldsEnter: FC = () => {
	return (
		<View style={style.box}>
            <Text style={style.login} >Login</Text>
            <TextInput
                placeholder="Enter email"
                placeholderTextColor="#4F4F51"
                style={[style.input, {marginBottom: 12}]}
            />
            <TextInput
                placeholder="Enter password"
                placeholderTextColor="#4F4F51"
                style={style.input}
            />
		</View>
	);
};

const style = StyleSheet.create({
    box: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    login: {
        color: 'white',
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 20
    },
    input: {
        backgroundColor: '#282828',
        width: '100%',
        height: 60,
        fontSize: 18,
        padding: 10,
        borderRadius: 14
    }
});

export default InputFieldsEnter;

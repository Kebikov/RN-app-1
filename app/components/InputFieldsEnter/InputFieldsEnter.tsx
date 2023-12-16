import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';
import { FC } from 'react';
import { useController, Control } from 'react-hook-form';
import { IAuthFormData } from '@/shared/types/auth.interface';


interface IInputFieldsEnterProps {
    /**
     * Состояние зарегистрирован ли пользователь.
     */
    isReg: boolean,
    control: Control<IAuthFormData>
}

/**
 * @component
 * Поля ввода логина и пароля.
 * @param {boolean} isReg - Состояние зарегистрирован ли пользователь.
 * @example <InputFieldsEnter isReg={isReg} />
 * @returns {Element}
 */
const InputFieldsEnter: FC<IInputFieldsEnterProps> = ({isReg, control}) => {

	return (
		<View style={style.box}>
            <Text style={style.login} >{isReg ? 'Register' : 'Login'}</Text>
            <Input name='email' control={control} marginBottom={12}/>
            <Input name='password' control={control}/>
		</View>
	);
};

interface IInputProps {
    /**
     * Имя поля.
     */
    name: keyof IAuthFormData,
    control: Control<IAuthFormData>,
    /**
     * Размер отступа с низу.
     */
    marginBottom?: number
}

const Input: FC<IInputProps> = ({name, control, marginBottom = 0}) => {

    const {field} = useController({
        control,
        defaultValue: '',
        name
    });

    const onInput = () => {
        console.log(field);
    }

    return(
        <TextInput
            value={field.value}
            onChangeText={field.onChange}
            placeholder="Enter email"
            placeholderTextColor="#4F4F51"
            style={[style.input, {marginBottom}]}
        />
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

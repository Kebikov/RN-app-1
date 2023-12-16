import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { FC } from 'react';
import { useController, Control, FieldValues } from 'react-hook-form';
import { IAuthFormData } from '@/shared/types/auth.interface';

interface IInputFieldsEnterProps {
    isReg: boolean;
    control: Control<IAuthFormData>;
}

const InputFieldsEnter: FC<IInputFieldsEnterProps> = ({ isReg, control }) => {
    return (
        <View style={style.box}>
            <Text style={style.login}>{isReg ? 'Register' : 'Login'}</Text>
            <Input name="email" control={control} marginBottom={12} />
            <Input name="password" control={control} />
        </View>
    );
};

interface IInputProps {
    name: keyof IAuthFormData;
    control: Control<IAuthFormData>;
    marginBottom?: number;
}

const Input: FC<IInputProps> = ({ name, control, marginBottom = 0 }) => {
    const {
        field,
        fieldState: { error },
    } = useController({
        control,
        defaultValue: '',
        name,
        rules: {
            required: 'This field is required', // Пример правила валидации (обязательное поле)
        },
    });

    return (
        <>
            <TextInput
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}
                placeholder={`Enter ${name}`}
                placeholderTextColor="#4F4F51"
                style={[style.input, { marginBottom }]}
            />
            {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
        </>
    );
};

const style = StyleSheet.create({
    box: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20,
    },
    login: {
        color: 'white',
        fontSize: 35,
        fontWeight: '600',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#282828',
        width: '100%',
        height: 60,
        fontSize: 18,
        padding: 10,
        borderRadius: 14,
    },
});

export default InputFieldsEnter;

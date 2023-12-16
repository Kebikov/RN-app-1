import { View, Text, StyleSheet } from 'react-native';
import {FC, useState} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
//* types
import { IAuthFormData } from '@/shared/types/auth.interface';
//* components
import ButtonExit from '@/components/ButtonExit/ButtonExit';
import InputFieldsEnter from '@/components/InputFieldsEnter/InputFieldsEnter';
import ButtonRegister from '@/components/ButtonRegister/ButtonRegister';


/**
 * Screens > с полями для ввода логина и пароля.
 * @returns {Element}
 */
const Auth: FC = () => {

    /**
     * isReg - Состояние регистрации пользователя.
     */
    const [isReg, setIsReg] = useState<boolean>(false);

    const {handleSubmit, reset, control} = useForm<IAuthFormData>({
        mode: 'onChange',
    });

    const onSubmit: SubmitHandler<IAuthFormData> = data => {
        const {email, password} = data;
        console.log(data);
    }

	return (
		<View style={style.center}>
            <View style={style.container}>
                <InputFieldsEnter isReg={isReg} control={control} />
                <ButtonExit handleSubmit={handleSubmit} onSubmit={onSubmit} />
                <ButtonRegister setIsReg={setIsReg} />
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


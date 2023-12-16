import { IUser } from "./user.interface";

//export interface IAuthFormData extends Pick<IUser, 'email' | 'password' > {}

export interface IAuthFormData {
    email: string,
    password: string,
}
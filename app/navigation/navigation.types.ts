import { ComponentType } from 'react';

export type TypeRootStackParamList = {
    Auth: undefined,
    Home: undefined
} & TypeRootStackAdminList;

type TypeRootStackAdminList = {
    Admin: undefined
}

export interface IRoute {
    name: keyof TypeRootStackParamList,
    component: ComponentType
    isAdmin?: boolean,
    options?: Options | {}
}

type Options = {
    animation: 'default' | 'fade' | 'slide_from_right' | 'slide_from_left' | 'slide_from_bottom' | 'slide_from_top'
}
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
    isAdmin?: boolean
}
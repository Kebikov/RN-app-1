import React, {FC, ReactNode} from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";

interface ILayout {
    isScrollView?: boolean,
    children: ReactNode
}

const Layout: FC<ILayout> = ({children, isScrollView = true}) => {
    return(
        <View style={styles.center}>
            {isScrollView ? <ScrollView>{children}</ScrollView> : children}
        </View>
    );
};

export default Layout;
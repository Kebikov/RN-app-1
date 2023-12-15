import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TypeRootStackParamList } from "@/navigation/navigation.types";

const useTypedNavigation = () => {
    return useNavigation<NavigationProp<TypeRootStackParamList>>();
}

export default useTypedNavigation;
import { Platform } from "react-native";
import { ScrollView, Box } from "native-base";

export const ScrollFix = (props) => {
    if(Platform.OS === 'ios') return (
        <ScrollView>
            {props.children}
        </ScrollView>
    )
    if(Platform.OS === 'android') return (
        <Box>
            {props.children}
        </Box>
    )
}
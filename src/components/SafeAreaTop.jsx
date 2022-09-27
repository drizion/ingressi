import react from "react"
import { Box } from "native-base"
import { Platform } from "react-native"

export function SafeAreaTop2(props){
    return <Box px={5} py={5} mt={Platform.OS == 'ios' ? 6 : 0} flex={1}>{props.children}</Box>
}

export function SafeAreaTop(props){
    return <Box mt={Platform.OS == 'ios' ? 6 : 0} flex={1}>{props.children}</Box>
}
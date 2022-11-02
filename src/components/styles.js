import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    brutalShadow: {
      borderWidth: 2,
      borderRightWidth: 4,
      borderBottomWidth: 4,
      borderRadius: 10,
    },
    brutalScroll: {
      borderWidth: 2,
      borderRightWidth: 4,
      borderRadius: 20,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },
    reversedBrutalShadow: {
      borderWidth: 2,
      borderLeftWidth: 4,
      borderTopWidth: 4,
      borderRadius: 10,
    },
    brutalButton: {
      borderWidth: 0.5,
      borderRightWidth: 2.5,
      borderBottomWidth: 2.5,
      borderRadius: 5
    },
    profilePicture: {
      borderWidth: 1.4,
      borderColor: '#000000'
    },
    elevation: {
      elevation: 10,
      shadowColor: '#000000'
    },
    image: {
      borderColor: "#000000",
      borderWidth: 1.3,
      borderRightWidth: 2.5,
      borderBottomWidth: 2.5,
      borderRadius: 5
    },
    badge: {
      borderWidth: 0.8, 
      borderColor: "#000", 
      borderRadius: 5
    }
  })
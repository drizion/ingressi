import { Avatar, Pressable } from 'native-base'
import React from 'react'
import { styles } from './styles'

const ProfilePicture = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Avatar
        style={styles.profilePicture} 
        source={{
          uri: props.url
        }}
        size={props.size | 12}
        />
    </Pressable>
  )
}

export default ProfilePicture
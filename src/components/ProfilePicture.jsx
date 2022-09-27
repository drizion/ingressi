import { Avatar } from 'native-base'
import React from 'react'
import { styles } from './styles'

const ProfilePicture = (props) => {
  return (
    <Avatar
      style={styles.profilePicture} 
      source={{
        uri: props.url
      }}
      size={12}
    />
  )
}

export default ProfilePicture